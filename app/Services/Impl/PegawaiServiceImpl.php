<?php

namespace App\Services\Impl;

use App\Models\Pegawai;
use App\Services\PegawaiService;

class PegawaiServiceImpl implements PegawaiService
{

    private Pegawai $pegawaiModel;
    
    function __construct()
    {
        $this->pegawaiModel = new Pegawai();
    }

    function showPegawai()
    {
        
    }

    function insertPegawai(array $user)
    {
        $this->pegawaiModel->create($user);
    }
}
