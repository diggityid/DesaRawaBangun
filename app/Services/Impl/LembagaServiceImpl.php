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
}