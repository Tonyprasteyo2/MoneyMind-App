<?php

namespace App\Http\Controllers;

use App\Models\M_transaksi;
use App\Models\User;
use Carbon\Carbon;
use Google\Cloud\Storage\Connection\Rest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use OpenAI\Laravel\Facades\OpenAI;

class C_Laporan extends Controller
{
    public function getLaporanLine(Request $request)
    {
        $user = $request->user();
        $data = $user->transaksi()->with("listKategori")->get();
        return response()->json([
            "data" => $data,
        ]);
    }
    public function generateLaporan(Request $request)
    {
        try {
            $request->validate([
                'periode' => 'nullable|string|in:30 Hari Terakhir,7 Hari Terakhir,Bulan Ini',
                'jenis' => 'nullable|string|in:pemasukan,pengeluaran,All',
                'kategori' => 'nullable|string'
            ]);
            $periode = $request->input('periode');
            $jenis = $request->input('jenis');
            $kategori = $request->input('kategori');
            $data = M_transaksi::query();
            if ($jenis && $jenis !== 'All') {
                $data->where('type', strtolower($jenis));
            }
            if ($kategori && $kategori !== '') {
                $data->where('category_id', $kategori);
            }
            $now = Carbon::now();
            if ($periode === '30 Hari Terakhir') {
                $data->where('created_at', '>=', $now->clone()->subDays(60));
            } elseif ($periode === '7 Hari Terakhir') {
                $data->where('created_at', '>=', $now->clone()->subDays(7));
            } elseif ($periode === 'Bulan Ini') {
                $data->where(function ($query) use ($now) {
                    $query->whereMonth('created_at', $now->month)
                        ->whereYear('created_at', $now->year)
                        ->orWhere(function ($q) use ($now) {
                            $lastMonth = $now->clone()->subMonth();
                            $q->whereMonth('created_at', $lastMonth->month)
                                ->whereYear('created_at', $lastMonth->year);
                        });
                });
            }
            $res = $data->where('firebase_uid', $request->user()->firebase_uid)->with("listKategori")->orderBy('created_at', 'desc')->get();
            return response()->json([
                'status' => true,
                'message' => 'Data laporan berhasil diambil',
                'data' => $res
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => 'Terjadi kesalahan pada server',
                'error' => $th->getMessage()
            ], 500);
        }
    }
    public function analisisAI(Request $request)
    {
        $data = $request->validate([
            "prev" => "nullable|string",
            "last" => "nullable|string",
            "naik" => "array",
            "turun" => "array",
        ]);
        $prev = $data['prev'] ?? "tidak diketahui";
        $last = $data['last'] ?? "tidak diketahui";
        $naik = $data['naik'] ?? [];
        $turun = $data['turun'] ?? [];
        $user = Auth::user()->name;
        $kata = "buatkanlah Analisis data keuangan pengguna berdasarkan informasi berikut:
            - Bulan sebelumnya: {$prev}
            - Bulan sekarang: {$last}
            - Kategori pengeluaran naik: " . json_encode($naik, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "
            - Kategori pengeluaran turun: " . json_encode($turun, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "

            Tulis hasil analisis dalam bentuk struktur seperti ini:

            <ul>
            <li><strong>Bulan Sebelumnya:</strong> [isi]</li>
            <li><strong>Bulan Sekarang:</strong> [isi]</li>
            <li><strong>Ringkasan:</strong>
                <ul>
                <li>Pengeluaran naik: ...</li>
                <li>Pengeluaran turun: ...</li>
                </ul>
            </li>
            <li><strong>Saran:</strong>
                <ul>
                <li>[Saran 1]</li>
                <li>[Saran 2]</li>
                </ul>
            </li>
            </ul>

            Gunakan bahasa Indonesia yang sopan, hangat,positif dan singkat jelas.
            Jangan sertakan Markdown (** atau *) dan berikan tulisan tebal apabila ada kata yang penting.
        ";
        $apikey = env("GEMINI_API_KEY");
        if (!$apikey) {
            return response()->json([
                'kode' => 500,
                'message' => "api key gemini tidak di temukan"
            ], 500);
        }
        try {
            $respon = Http::withHeaders([
                'Content-Type' => 'application/json',
                'x-goog-api-key' => $apikey
            ])->timeout(23)->post(env("URL_API_GEMINI"), [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $kata],
                        ],
                    ],
                ],
            ]);
            if ($respon->failed()) {
                return response()->json([
                    'success' => 500,
                    'message' => 'Gagal menghubungi layanan AI. Coba lagi nanti.',
                ], 500);
            }
            $result = $respon->json();
            $message = $result['candidates'][0]['content']['parts'][0]['text'] ?? $result['candidates'][0]['output_text'] ?? "tidak ada hasil";
            $cleantext = preg_replace('/\*+/', '', trim($message));
            $cleantext = strip_tags($cleantext, '<ul><li><strong><br><b><p>');
            return response()->json([
                "kode" => 200,
                "message" => $cleantext
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'kode' => 504,
                'message' => 'ada gangguan koneksi',
            ], 504);
        }
    }
}
