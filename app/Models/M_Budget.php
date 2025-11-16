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
        "budget_planing"
    ];

    public function getKategoriTransaksi(){
        return $this->belongsTo(M_kategori::class,'id_kategori','kategori_id');
    }
}
