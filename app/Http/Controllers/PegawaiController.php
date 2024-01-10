<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\PegawaiService;
use Illuminate\Support\Facades\Auth;

class PegawaiController extends Controller
{

    private PegawaiService $pegawaiService;

    public function __construct(PegawaiService $pegawaiService)
    {
        $this->pegawaiService = $pegawaiService;
    }

    private function check()
    {
        $user = Auth::user();

        return $user;
    }

    public function pegawai(): Response
    {
        return response()->view('pegawai', [
            'user' => self::check()
        ]);
    }

    public function admin(): Response
    {
        return response()->view('admin.pegawai', [
            'user' => self::check()
        ]);
    }

    public function store(Request $request)
    {

        $validation  = $request->validate([
            'name' => 'required',
            'image_profile' => 'image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'pendidikan' => 'required'
        ]);

        $this->pegawaiService->insert($validation);

    return redirect()->action([PegawaiController::class, 'pegawai']);
    }

    public function update(Request $request, string $id){

        $validation  = $request->validate([
            'name' => 'required',
            'image_profile' => 'image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'pendidikan' => 'required'
        ]);

        if($this->pegawaiService->check($id)){
            $this->pegawaiService->update($validation, $id);
        }
    }

    public function delete(string $id)
    {
        $this->pegawaiService->remove($id);        
    }
}
