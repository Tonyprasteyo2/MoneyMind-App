<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Kreait\Firebase\Factory;
use Symfony\Component\HttpFoundation\Response;

class VerifyTokenFirebase
{
    protected $auth;

    public function __construct()
    {
        // Inisialisasi Firebase Auth
        $this->auth = (new Factory)
            ->withServiceAccount(base_path(env("FIREBASE_CREDENTIALS")))
            ->createAuth();
    }

    public function handle(Request $request, Closure $next): Response
    {
        // Ambil token dari header Authorization: Bearer <token>
        $idToken = $request->bearerToken();

        if (!$idToken) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        try {
            // Gunakan cache supaya verifikasi token lebih cepat
            $key = "firebase_token:" . md5($idToken);

            if (Cache::has($key)) {
                $firebaseUid = Cache::get($key);
            } else {
                $verifiedToken = $this->auth->verifyIdToken($idToken);
                $firebaseUid = $verifiedToken->claims()->get('sub');
                Cache::put($key, $firebaseUid, 600); // cache 10 menit
            }

            // Ambil data user dari Firebase Auth
            $dataFirebase = $this->auth->getUser($firebaseUid);

            // Simpan / update user di database lokal
            $user = User::updateOrCreate(
                ['firebase_uid' => $firebaseUid],
                [
                    'email' => $dataFirebase->email,
                    'name'  => $dataFirebase->displayName ?? 'User',
                    'photo_url' => $dataFirebase->photoUrl ?? null,
                ]
            );

            // Tambahkan UID ke request agar bisa dipakai di Controller
            $request->attributes->set('firebase_uid', $firebaseUid);

            // Login ke sistem Laravel
            auth()->login($user);
            $request->setUserResolver(fn() => $user);

            // Log optional (bisa dihapus nanti)
            Log::info('Firebase verified', [
                'uid' => $firebaseUid,
                'email' => $dataFirebase->email ?? null,
                'name' => $dataFirebase->displayName ?? null,
                'ip' => $request->ip(),
            ]);

            // Lanjut ke controller berikutnya
            return $next($request);

        } catch (\Throwable $e) {
            Log::error('Firebase Token Error: ' . $e->getMessage());

            return response()->json([
                'error' => 'Invalid Token',
                'message' => $e->getMessage(),
            ], 401);
        }
    }
}
