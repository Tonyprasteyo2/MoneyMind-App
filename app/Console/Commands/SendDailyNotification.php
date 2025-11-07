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
        $factory = (new Factory)->withServiceAccount(base_path(env("FIREBASE_CREDENTIALS")));
        $pesan = $factory->createMessaging();
        $token = M_tokenFCM::pluck('token')->toArray();
        if (!$token) {
            $this->warn("tidak ada token");
            return Command::SUCCESS;
        }
        foreach ($token as $key) {
            $pesannya = [
                'token' => $key,
                'notification' => [
                    'title' => 'Notifikasi Laporan Keuangan Harian',
                    'body' => 'Yuk catat transaksi kamu saat ini'
                ],
                'webpush' => [
                    'fcm_options' => [
                        'link' => env("APP_URL"),

                    ],
                ],
            ];
            try {
                $pesan->send($pesannya);
                $this->info("terkirim");
            } catch (\Throwable $th) {
                $this->error("gagal");
            }
        }
        return Command::SUCCESS;
    }
}
