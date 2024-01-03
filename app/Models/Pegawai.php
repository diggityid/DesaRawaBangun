<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pegawai extends Model
{
    use HasFactory, SoftDeletes;

    protected $tables = 'pegawais';
    
    protected $fillables = [
        'name', 'image_profile', 'jabatan', 'nip', 'riwayat_studi'
    ];
}
