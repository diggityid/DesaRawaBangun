<?php

namespace App\Http\Controllers;

use App\Services\PegawaiService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminPegawaiController extends Controller
{

    private PegawaiService $pegawaiService;

    function __construct(PegawaiService $pegawaiService)
    {
        $this->pegawaiService = $pegawaiService;
    }

    public function pegawai(): Response
    {
        return response()->view('admin.pegawai');
    }

    public function doPegawai(Request $request)
    {

        $validation  = $request->validate([
            'name' => 'require',
            'image_profile' => 'image|file|max:2048',
            'nip' => 'require',
            'pendidikan' => 'require'
        ]);

        $pendidikanJson = json_encode($validation['pendidikan']);
        $validation['pendidikan'] = $pendidikanJson;

        $this->pegawaiService->insertPegawai($validation);
    }
}
