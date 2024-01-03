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

    function checkAbout()
    {
        $result = DB::select('SELECT * FROM abouts');
        if (empty($result)) {
            return true;
        }
        return false;
    }

    function insertAbout(array $input)
    {

        $this->aboutModel->create($input);
    }

    function updateAbout(array $input)
    {
        $update = $this->aboutModel->first();
        $update->update($input);
    }

    function showAbout()
    {
        $result = $this->aboutModel->get();

        if (count($result) == 0) {
            return (object) [
                'intro' => null,
                'visi' => null,
                'misi' => null,
                'history' => null
            ];
        } else {
            $visi = json_decode($result[0]->visi, true);
            $misi = json_decode($result[0]->misi, true);

            return (object) [
                'intro' => $result[0]->intro,
                'visi' => $visi,
                'misi' => $misi,
                'history' => $result[0]->history
            ];
        }

        // if(empty($result)){
        //     return (object) [
        //         'intro' => null,
        //         'visi' => null,
        //         'misi' => null,
        //         'history' => null
        //     ];
        // }


    }
}
