<?php
namespace App\Services\Impl;

use App\Models\Berita;
use App\Services\BeritaService;

class BeritaServiceImpl implements BeritaService
{

    private Berita $berita;

    public function __construct()
    {
        $this->berita = new Berita();
    }

    public function insert(array $user)
    {
        $this->berita->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->berita->where('id', $id)->update($user);
    }

    public function showAll()
    {
        return $this->berita->all();
    }

    public function show(string $id)
    {
        return $this->berita->where('id', $id)->get();
    }

    public function remove(string $id)
    {
        $this->berita->where('id', $id);
    }
}