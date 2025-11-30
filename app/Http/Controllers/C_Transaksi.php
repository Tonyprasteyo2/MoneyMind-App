<?php

namespace App\Http\Controllers;

use App\Models\M_Budget;
use App\Models\M_kategori;
use App\Models\M_transaksi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class C_Transaksi extends Controller
{
    public function tambahTransaksi(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json([
                "kode" => 401,
                "message" => "User tidak terautentikasi"
            ], 401);
        }
        $validator = Validator::make($request->all(), [
            'jenis_transaksi' => 'required|in:pemasukan,pengeluaran',
            'jumlah'          => 'required|numeric|min:1',
            'deskripsi'       => 'nullable|string',
            'kategori'        => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "kode"    => 302,
                "message" => $validator->errors()->first()
            ]);
        }

        $inputKategori = $request->kategori;
        $kategoriId = null;
        if (is_numeric($inputKategori)) {
            $kategori = DB::table('tbl_kategori')
                ->where('kategori_id', $inputKategori)
                ->where('firebase_uid', $user->firebase_uid)
                ->first();

            if (!$kategori) {
                return response()->json([
                    "kode" => 404,
                    "message" => "Kategori tidak ditemukan"
                ], 404);
            }

            $kategoriId = $kategori->kategori_id;
        } else {

            $kategoriNama = trim(strtolower($inputKategori));

            $kategori = DB::table('tbl_kategori')
                ->whereRaw('LOWER(name) = ?', [$kategoriNama])
                ->where('firebase_uid', $user->firebase_uid)
                ->first();

            if (!$kategori) {
                $kategoriId = DB::table('tbl_kategori')->insertGetId([
                    'firebase_uid' => $user->firebase_uid,
                    'name'         => ucfirst($kategoriNama),
                    'icon'         => 'lain-lain',
                    'created_at'   => now(),
                    'updated_at'   => now()
                ]);
            } else {
                $kategoriId = $kategori->kategori_id;
            }
        }
        $transaksi = M_transaksi::create([
            "firebase_uid" => $user->firebase_uid,
            "category_id"  => $kategoriId,
            "amount"       => $request->jumlah,
            "type"         => $request->jenis_transaksi,
            "note"         => $request->deskripsi,
        ]);

        return response()->json([
            "kode" => 200,
            "message" => "Transaksi berhasil ditambahkan",
            "data"  => $transaksi
        ], 200);
    }

    public function tambahKategori(Request $request)
    {
        $firebase = $request->user();
        $valid = $request->validate([
            'name' => [
                'required',
                'string',
                'max:100',
                'regex:/^[\pL\pN\s\-\_\.]+$/u'
            ],
            'icon' => 'nullable|string|max:50',
        ], [
            'name.regex' => 'Nama kategori hanya boleh huruf, angka, spasi, -, _ atau .',
        ]);
        M_kategori::create([
            "name" => strip_tags(trim($valid['name'])),
            "firebase_uid" => $firebase->firebase_uid,
            "icon" => strip_tags(trim($valid['icon']))
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Kategori berhasil ditambahkan',
        ], 200);
    }
    public function showKategori(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                "kode" => 401,
                "message" => "User tidak terautentikasi"
            ], 401);
        }

        $data = M_kategori::where('firebase_uid', $user->firebase_uid)
            ->orderBy('name', 'asc')
            ->get();

        return response()->json([
            "kode" => 200,
            "message" => "Data kategori berhasil diambil",
            "data" => $data
        ]);
    }

    public function transaksiList(Request $request)
    {
        $user = $request->user();
        $data = $user->transaksi()->with("listKategori")
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)->orderBy("created_at", "desc")
            ->get();
        return response()->json([
            "data" => $data,
        ]);
    }
    public function deleteTransaksi(Request $request, $id)
    {
        $valid = Validator::make(
            ["id" => $id],
            ["id" => "integer|exists:tbl_transaksi,id"],
            ["id.exists" => "data tidak ditemukan"]
        );
        if ($valid->fails()) {
            return response()->json([
                "kode"    => 302,
                "message" => $valid->errors()->first()
            ], 404);
        }
        $data = M_transaksi::findOrFail($id);
        if ($request->user()->firebase_uid !== $data->firebase_uid) {
            return response()->json([
                "kode" => 403,
                "message" => "Anda tidak punya hak untuk menghapus transaksi ini"
            ], 403);
        }
        $data->delete();
        return response()->json([
            "kode" => 200,
            "message" => "List transaksi berhasil di hapus"
        ], 200);
    }
    public function transaksiUpdate(Request $request, $id)
    {
        $valid = Validator::make($request->all(), [
            'note'   => 'required|string|max:255',
            'amount' => 'required|numeric|min:1',
            'type'   => 'required|in:pemasukan,pengeluaran',
            'kategori' => 'numeric',
        ], [
            "amount.numeric" => "Nominal jumlah harap berupa angka",
            "amount.required" => "Nominal Harap di isi berupa angka"
        ]);

        if ($valid->fails()) {
            return response()->json([
                'message' => $valid->errors()->first(),
            ], 422);
        };
        $data = M_transaksi::where('id', $id)->where("firebase_uid", $request->user()->firebase_uid)->firstOrFail();
        $data->update([
            "category_id" => $request->kategori,
            'amount' => $request->amount,
            'type'   => $request->type,
            'note'   => $request->note,
        ]);
        return response()->json([
            "kode" => 200,
            'message' => 'Transaksi berhasil diperbarui',
        ], 200);
    }
    public function AddBudget(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'id_kategori' => "integer",
            'budgetPlaning' => 'numeric|min:1',
            'targetBulan'=>'integer'
        ]);
        if ($valid->failed()) {
            return response()->json([
                'status' => 422,
                'message' => $valid->errors()->first()
            ], 422);
        }
        $budget = M_Budget::create([
            "uid_firebase" => $request->user()->firebase_uid,
            'id_kategori' => $request->id_kategori,
            'budget_planing' => $request->budgetPlaning,
            'target_bulan'=>$request->targetBulan
        ]);
        return response()->json([
            'status'  => 200,
            'message' => 'Data budget berhasil ditambahkan',
        ], 200);
    }
    public function getBudgetPlannig(Request $request)
    {
        $uid = $request->user()->firebase_uid;
        $kategori = M_kategori::with([
            "transactions" => function ($q) use ($uid) {
                $q->where("firebase_uid", $uid);
            },
            "getBudget" => function ($q) use ($uid) {
                $q->where("uid_firebase", $uid);
            }
        ])->whereHas('getBudget')->where('firebase_uid', $uid)->get();
        $result = $kategori->map(function ($key) {
            $totalpengeluaran = $key->transactions->where("type", "pengeluaran")->sum("amount");
            $totalPemasukan = $key->transactions->where("type", "pemasukan")->sum("amount");
            $budget = $key->getBudget->budget_planing ?? 0;
            $persen = $budget > 0 ? min(100, ($totalpengeluaran / $budget) * 100) : 0;
            $tipe = $key->transactions->pluck("type");
            return [
                "kategori" => $key->name,
                "budget" => $budget,
                "total_pengeluaran" => $totalpengeluaran,
                "total_pemasukan" => $totalPemasukan,
                "sisa" => max(0, $budget - $totalpengeluaran),
                "persen" => round($persen, 1),
                "type" => $tipe
            ];
        });
        return response()->json([
            "status" => 200,
            "data" => $result
        ]);
    }
    public function getDataBudget(Request $request)
    {
        $data = M_Budget::with("getKategoriTransaksi:id,kategori_id,nama_kategori")->where('uid_firebase', $request->user()->firebase_uid)->get();
        return response()->json([
            "status" => 200,
            "data" => $data
        ]);
    }
    public function updateDataBudget(Request $request)
    {
        try {
            $validated = $request->validate([
                'idBudget' => 'required',
                'budget_planing' => 'required|numeric|min:0',
            ]);
            $Uid = $request->user()->firebase_uid;
            $budget = M_Budget::where('id_budget', $validated['idBudget'])
                ->where('uid_firebase', $Uid)
                ->first();
            if (!$budget) {
                return response()->json([
                    'status' => false,
                    'message' => 'Budget tidak ditemukan atau bukan milik user.'
                ], 403);
            }
            $budget->budget_planing = $validated['budget_planing'];
            $budget->save();
            return response()->json([
                'status' => true,
                'message' => 'Budget berhasil diperbarui.',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Terjadi kesalahan saat update.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function topPengeluaran(Request $request)
    {
        $data = M_transaksi::with("getKategori")->where('type', 'pengeluaran')->selectRaw('category_id,SUM(amount) as total_amount,COUNT(id) as transaksi')->groupBy('category_id')->orderByDesc('total_amount')->limit(3)->where('firebase_uid', $request->user()->firebase_uid)->get();
        $total = $data->sum('total_amount');
        $result = $data->map(function ($item) use ($total) {
            return [
                'category' => $item->getKategori->name ?? '-',
                'icon' => $item->getKategori->icon ?? '-',
                'amount' => $item->total_amount,
                'transaksi' => $item->transaksi,
                'persen' => $total > 0 ? round(($item->total_amount / $total) * 100) : 0,
            ];
        });
        return response()->json([
            "status" => 200,
            "data" => $result
        ]);
    }
    public function insightAnalisis(Request $request)
    {
        try {
            $transaksi = M_transaksi::with("getKategori")->where('firebase_uid', $request->user()->firebase_uid)->where('type', 'pengeluaran')->get();
            if ($transaksi->count() == 0) {
                return response()->json([
                    'status' => 200,
                    "data" => [
                        'insight' => "belum ada transaksi minggu ini",
                        "prediksi_depan" => "-",
                        "todo" => ['mulai catat transaksi hari ini']
                    ]
                ]);
            }
            $kategori = [];
            foreach ($transaksi as $key) {
                $listkategori = $key->getKategori->name ?? 'tidak ada';
                if (!isset($kategori[$listkategori])) {
                    $kategori[$listkategori] = 0;
                }
                $kategori[$listkategori] += $key->amount;
            }
            arsort($kategori);
            $kategoriboros = array_key_first($kategori);
            $totalboros = $kategori[$kategoriboros];
            $payload = [
                "transaksi" => $transaksi->map(function ($t) {
                    return [
                        "amount" => $t->amount,
                        "category" => $t->getKategori->name ?? '-',
                        "type" => $t->type
                    ];
                }),
                "kategori_boros" => $kategoriboros,
                "total_boros" => $totalboros
            ];
            return response()->json([
                "status" => 200,
                "payload" => $payload
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'pesan' => $th->getMessage()
            ]);
        }
    }
}
