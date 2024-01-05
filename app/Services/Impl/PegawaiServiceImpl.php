<?php

namespace App\Services\Impl;

use App\Models\Pegawai;
use App\Services\PegawaiService;
use Illuminate\Support\Facades\DB;

class PegawaiServiceImpl implements PegawaiService
{

    private Pegawai $pegawaiModel;

    function __construct()
    {
        $this->pegawaiModel = new Pegawai();
    }

    function checkPegawai(string $id)
    {
        $check = DB::select("SELECT id FROM pegawais WHERE id = $id");
        if (empty($check)) {
            return false;
        }
        return true;
    }

    function insertPegawai(array $user)
    {
        $this->pegawaiModel->create($user);
    }

    function updatePegawai(array $user, string $id)
    {
        $this->pegawaiModel->where('id', $id)->update($user);
    }

    function showPegawai()
    {
        $result = $this->pegawaiModel->get();

        if (count($result) == 0) {
            return (object) [
                'name' => null,
                'image_profile' => null,
                'jabatan' => null,
                'nip' => null,
                'pendidikan' => null
            ];
        } else {
            return (object) [
                'name' => $result[0]->name,
                'image_profile' => $result[0]->image_profile,
                'jabatan' => $result[0]->jabatan,
                'nip' => $result[0]->nip,
                'pendidikan' => $result[0]->pendidikan
            ];
        }
    }

    function showAll()
    {
        $result = DB::select("SELECT * FROM pegawais");

        return $result;
    }

    function removePegawai(string $id)
    {
        $this->pegawaiModel->where('id', $id)->delete();
    }
}
