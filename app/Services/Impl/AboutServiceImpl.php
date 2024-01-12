<?php

namespace App\Services\Impl;

use App\Models\About;
use App\Services\AboutService;
use Illuminate\Support\Facades\DB;

class AboutServiceImpl implements AboutService
{
    private About $aboutModel;

    function __construct()
    {
        $this->aboutModel = new About();
    }

    function insert(array $input)
    {
        $this->aboutModel->create($input);
    }

    function update(array $input)
    {
        $update = $this->aboutModel->first();
        $update->update($input);
    }

    function showAll()
    {
        return $this->aboutModel->all();
    }
}
