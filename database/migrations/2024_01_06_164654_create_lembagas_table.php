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
        Schema::create('lembagas', function (Blueprint $table) {
            $table->id();
            $table->text('name')->nullable();
            $table->text('image_profile')->nullable();
            $table->text('singkatan')->nullable();
            $table->text('dasar_hukum')->nullable();
            $table->text('alamat')->nullable();
            $table->longText('profile')->nullable();
            $table->longText('visi')->nullable();
            $table->longText('misi')->nullable();
            $table->longText('tugas')->nullable();
            $table->longText('pengurus')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lembagas');
    }
};
