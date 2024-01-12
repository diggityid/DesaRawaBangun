<?php

namespace App\Services\Impl;

use App\Models\Galeri;
use App\Services\GaleriService;
use Illuminate\Support\Facades\DB;

class GaleriServiceImpl implements GaleriService
{
    private Galeri $galeriModel;

    public function __construct()
    {
        $this->galeriModel = new Galeri();
    }

    public function insert(array $user)
    {
        $this->galeriModel->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->galeriModel->where('id', $id)->update($user);
    }

    public function showAll()
    {
        return $this->galeriModel->all();
    }

    public function show(string $id)
    {
        return $this->galeriModel->where('id', $id)->get();
    }

    public function remove(string $id)
    {
        $this->galeriModel->where('id', $id)->delete();
    }
}
