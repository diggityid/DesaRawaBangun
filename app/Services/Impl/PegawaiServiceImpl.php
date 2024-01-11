<?php

namespace App\Services\Impl;

use App\Models\Pegawai;
use App\Services\PegawaiService;
use Illuminate\Support\Facades\DB;

class PegawaiServiceImpl implements PegawaiService
{

    private Pegawai $pegawaiModel;

    public function __construct()
    {
        $this->pegawaiModel = new Pegawai();
    }

    public function check(string $id)
    {
        $check = DB::select("SELECT id FROM pegawais WHERE id = $id");
        if (empty($check)) {
            return false;
        }
        return true;
    }

    public function insert(array $user)
    {
        $this->pegawaiModel->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->pegawaiModel->where('id', $id)->update($user);
    }

    public function show(string $id)
    {
        return $this->pegawaiModel->where('id', $id)->get();
    }

    public function showAll()
    {
        $result = DB::select("SELECT * FROM pegawais");

        return $result;
    }

    public function remove(string $id)
    {
        $this->pegawaiModel->where('id', $id)->delete();
    }
}
