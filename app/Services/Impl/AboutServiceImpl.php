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

    function check()
    {
        $result = DB::select('SELECT * FROM abouts');
        if (empty($result)) {
            return true;
        }
        return false;
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

    function show()
    {
        $result = $this->aboutModel->get();

        return [
            'intro' => $result[0]->intro ?? null,
            'visi' => $result[0]->visi  ?? null,
            'misi' => $result[0]->misi  ?? null,
            'history' => $result[0]->history  ?? null
        ];
    }
}
