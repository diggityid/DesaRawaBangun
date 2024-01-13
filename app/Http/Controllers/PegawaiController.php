<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\PegawaiService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PegawaiController extends Controller
{

    private PegawaiService $pegawaiService;

    public function __construct(PegawaiService $pegawaiService)
    {
        $this->pegawaiService = $pegawaiService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function perangkat(): Response
    {
        $result = $this->pegawaiService->showAll();

        return response()->view('perangkat', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function pegawai(string $id): Response
    {
        $result = $this->pegawaiService->show($id);

        return response()->view('selengkapnya.pegawai', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {
        return response()->view('admin.pegawai.create', [
            'user' => $this->user()
        ]);
    }

    public function store(Request $request)
    {

        $validation  = $request->validate([
            'name' => 'required',
            'images' => 'required|image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'riwayat_studi' => 'required'
        ]);

        if ($request->file('images')) {
            $validation['images'] = $request->file('images')->store('post-images-pegawai');
        }

        $this->pegawaiService->insert($validation);

        return redirect()->action([PegawaiController::class, 'pegawai']);
    }

    public function edit(string $id)
    {
        $result = $this->pegawaiService->show($id);

        return response()->view('admin.pegawai.update', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function update(Request $request, string $id)
    {

        $validation  = $request->validate([
            'name' => 'required',
            'image_profile' => 'image|file|max:2048',
            'jabatan' => 'required',
            'nip' => 'required',
            'pendidikan' => 'required'
        ]);

        $getPath = $this->pegawaiService->show($id);

        if($request->file('images')){
            Storage::delete('storage/' . $getPath[0]->images_profile);
            $this->pegawaiService->update($validation, $id);
        }
    }

    public function delete(string $id)
    {
        $this->pegawaiService->remove($id);
    }
}
