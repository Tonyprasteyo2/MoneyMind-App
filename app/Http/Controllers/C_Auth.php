<?php

namespace App\Http\Controllers;

use App\Models\M_tokenFCM;
use Kreait\Firebase\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class C_Auth extends Controller
{
    public function LoginMe(Request $request)
    {
        $data = $request->user();
        $data->update([
            'name' => $request->name,
            'email' => $request->email,
            'photo_url' => $request->photoUrl,
            "updated_at" => now()
        ]);
        return response()->json(["message" => 200]);
    }
    public function saveToken(Request $request)
    {
        $request->validate([
            'token' => 'required|string|min:50|max:255',
        ]);
        $user = Auth::user();
        if (!$user) {
            return response()->json(["error" => "tidak ada user"], 401);
        }
        $firebaseUid = $user->firebase_uid ?? $user->id;
        M_tokenFCM::updateOrCreate(
            ['user_id' => $firebaseUid],
            ['token' => $request->token]
        );
        return response()->json(['message' => 'Token saved'], 200);
    }
}
