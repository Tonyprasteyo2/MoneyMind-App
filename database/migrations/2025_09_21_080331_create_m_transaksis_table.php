<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_transaksi', function (Blueprint $table) {
            $table->id();
            $table->string('firebase_uid');
            $table->unsignedBigInteger('category_id');
            $table->decimal('amount', 15, 2);
            $table->enum('type', ['pemasukan', 'pengeluaran']);
            $table->string('note')->nullable();
            $table->timestamps();

            // $table->foreign('category_id')
            //     ->references('kategori_id')
            //     ->on('tbl_kategori')
            //     ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_transaksi');
    }
};
