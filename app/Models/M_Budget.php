<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_Budget extends Model
{
    use HasFactory;
    protected $table = "tbl_budget";
    protected $fillable = [
        "uid_firebase",
        "id_kategori",
        "budget_planing",
        "target_bulan"
    ];
    protected $primaryKey = 'id_budget';
    public function getKategoriTransaksi(){
        return $this->belongsTo(M_transaksi::class,'category_id','kategori_id');
    }
}
