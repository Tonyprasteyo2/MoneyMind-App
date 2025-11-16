<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\C_Auth;
use App\Http\Controllers\C_Laporan;
use App\Http\Controllers\C_Transaksi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('firebase.auth')->group(function(){
    Route::post("/auth/login",[C_Auth::class,'LoginMe']);
    Route::post("/tambah-transaksi",[C_Transaksi::class,'tambahTransaksi']);
    Route::post("/tambah-kategori",[C_Transaksi::class,"tambahKategori"]);
    Route::get("/list-kategori",[C_Transaksi::class,"showKategori"]);
    Route::get("/list-transaksi",[C_Transaksi::class,"transaksiList"]);
    Route::delete("/remove-transaksi/{id}",[C_Transaksi::class,"deleteTransaksi"]);
    Route::post("/transaksi-update/{id}",[C_Transaksi::class,"transaksiUpdate"]);
    Route::get("/transaksi-all-line",[C_Laporan::class,"getLaporanLine"]);
    Route::post("/filter-laporan",[C_Laporan::class,"generateLaporan"]);
    Route::post('/analisis-laporan', [C_Laporan::class, 'analisisAI']);
    Route::post('/token-fcm', [C_Auth::class, 'saveToken']);
    Route::post('/tambah-budget',[C_Transaksi::class,"AddBudget"]);
    Route::get('/budget-planing',[C_Transaksi::class,"getBudgetPlannig"]);
});