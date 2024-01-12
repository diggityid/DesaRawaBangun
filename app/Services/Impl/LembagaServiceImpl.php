<?php

namespace App\Services\Impl;

use App\Models\Lembaga;
use App\Services\LembagaService;

class LembagaServiceImpl implements LembagaService
{
    private Lembaga $lembagaModel;

    public function __construct()
    {
        $this->lembagaModel = new Lembaga();
    }

    public function insert(array $user)
    {
        $this->lembagaModel->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->lembagaModel->where('id', $id)->update($user);
    }

    public function showAll()
    {
        return $this->lembagaModel->all();
    }

    public function show(string $id)
    {
        return $this->lembagaModel->where('id', $id)->get();
    }

    public function remove(string $id)
    {
        $this->lembagaModel->delete($id);
    }
}
