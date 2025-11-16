<?php

namespace App\Console\Commands;

use App\Models\M_tokenFCM;
use Illuminate\Console\Command;
use Kreait\Firebase\Factory;

class SendDailyNotification extends Command
{
    protected $signature = 'notify:daily';
    protected $description = 'Kirim notifikasi harian ke semua user';

    public function handle()
    {

        $credentialPath = base_path(config('services.firebase.credentials'));
        $factory = (new Factory)->withServiceAccount($credentialPath);
        $messaging = $factory->createMessaging();

        $tokens = M_tokenFCM::pluck('token')->toArray();

        if (!$tokens) {
            $this->warn("Tidak ada token");
            return Command::SUCCESS;
        }

        foreach ($tokens as $token) {

            $payload = [
                'token' => $token,
                'notification' => [
                    'title' => 'Notifikasi Laporan Keuangan Harian',
                    'body' => 'Yuk catat transaksi kamu saat ini'
                ],
                'webpush' => [
                    'fcm_options' => [
                        'link' => config('app.url'),
                    ],
                ],
            ];

            try {
                $messaging->send($payload);
                $this->info("Terkirim ke token: $token");
            } catch (\Throwable $th) {
                $this->error("Gagal kirim ke token $token : " . $th->getMessage());
            }
        }

        return Command::SUCCESS;
    }
}
