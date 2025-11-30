<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class M_kategori extends Model
{
    use HasFactory;
    protected $table = 'tbl_kategori';
    protected $primaryKey = 'kategori_id';
    protected $fillable = [
       'firebase_uid',
        'name',
        // 'type',
        'icon',
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function transactions()
    {
         return $this->hasMany(M_transaksi::class, 'category_id', 'kategori_id');
    }
    public function getBudget(){
        return $this->hasOne(M_Budget::class,'id_kategori','kategori_id')->whereRaw('DATE_ADD(created_at,INTERVAL target_bulan MONTH)>=NOW()');
    }
}
