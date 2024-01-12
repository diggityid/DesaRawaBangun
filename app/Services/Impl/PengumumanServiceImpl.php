<?php

namespace App\Services\Impl;

use App\Models\Pengumuman;
use App\Services\PengumumanService;

class PengumumanServiceImpl implements PengumumanService
{

    private Pengumuman $pengumuman;

    public function __construct()
    {
        $this->pengumuman = new Pengumuman();
    }

    public function insert(array $user)
    {
        $this->pengumuman->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->pengumuman->where('id', $id)->update($user);
    }

    public function showAll()
    {
        return  $this->pengumuman->all();
    }

    public function show(string $id)
    {
        return $this->pengumuman->where('id', $id)->get();
    }

    public function remove(string $id)
    {
        $this->pengumuman->where('id', $id)->delete();
    }
}
