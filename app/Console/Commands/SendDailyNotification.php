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
<<<<<<< HEAD
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
=======

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
>>>>>>> beta-versi
                'notification' => [
                    'title' => 'Notifikasi Laporan Keuangan Harian',
                    'body' => 'Yuk catat transaksi kamu saat ini'
                ],
                'webpush' => [
                    'fcm_options' => [
<<<<<<< HEAD
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
=======
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

>>>>>>> beta-versi
        return Command::SUCCESS;
    }
}
