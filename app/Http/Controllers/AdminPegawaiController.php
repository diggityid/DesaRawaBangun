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

    public function insertPegawai(Request $request)
    {

        $validation  = $request->validate([
            'name' => 'required',
            'image_profile' => 'image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'pendidikan' => 'required'
        ]);

        $this->pegawaiService->insertPegawai($validation);

    return redirect()->action([PegawaiController::class, 'pegawai']);
    }

    public function updatePegawai(Request $request, string $id){

        $validation  = $request->validate([
            'name' => 'required',
            'image_profile' => 'image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'pendidikan' => 'required'
        ]);

        if($this->pegawaiService->checkPegawai($id)){
            $this->pegawaiService->updatePegawai($validation, $id);
        }
    }

    public function deletePegawai(string $id)
    {
        $this->pegawaiService->removePegawai($id);        
    }
}
