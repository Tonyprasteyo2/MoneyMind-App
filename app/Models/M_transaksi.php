<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_transaksi extends Model
{
    use HasFactory;
    protected $table = "tbl_transaksi";
    protected $fillable = [
      'firebase_uid',
        'category_id',
        'amount',
        'type',
        'note',
    ];
<<<<<<< HEAD
    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
=======
>>>>>>> beta-versi
    public function listKategori()
    {
        return $this->belongsTo(M_kategori::class,'category_id','kategori_id');
    }
<<<<<<< HEAD
=======
    public function getKategori(){
        return $this->belongsTo(M_kategori::class,'category_id','kategori_id');
    }
>>>>>>> beta-versi
}
