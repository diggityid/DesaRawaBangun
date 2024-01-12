<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Lembaga extends Model
{
    use HasFactory, SoftDeletes;

    protected $tables = 'lembagas';

    protected $fillables = [
        'name', 'images', 'singkatan', 'dasar_hukum', 'alamat', 'profile', 'visi', 'misi', 'tugas', 'pengurus'
    ];
}
