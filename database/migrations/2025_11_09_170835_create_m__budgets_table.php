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
        Schema::create('tbl_budget', function (Blueprint $table) {
            $table->id("id_budget");
            $table->string('uid_firebase');
            $table->integer("id_kategori");
            $table->decimal('budget_planing', 15, 2);
            $table->timestamps();
            $table->unique(['uid_firebase','id_kategori']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_budget');
    }
};
