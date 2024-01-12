<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\LembagaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class LembagaController extends Controller
{

    private LembagaService $lembagaService;

    public function __construct(LembagaService $lembagaService)
    {
        $this->lembagaService = $lembagaService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function lembaga(): Response
    {
        $result = $this->lembagaService->showAll();

        return response()->view('lembaga', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {
        return response()->view('admin.lembaga.create', [
            'user' => $this->user()
        ]);
    }

    public function store(Request $request)
    {
        $validation = $request->validate([
            'name' => 'required',
            'images' => 'required|image|file|max:2048',
            'singkatan' => 'required',
            'dasar_hukum' => 'required',
            'alamat' => 'required',
            'profile' => 'required',
            'visi' => 'required',
            'misi' => 'required',
            'tugas' => 'required',
            'fungsi' => 'required',
            'pengurus' => 'required'
        ]);

        if ($request->file('images')) {
            $validation['images'] = $request->file('images')->store('post-images-lembaga');
        }

        $this->lembagaService->insert($validation);

        return redirect()->action([LembagaController::class, 'lembaga']);
    }

    public function edit(string $id)
    {
        $result = $this->lembagaService->show($id);

        return response()->view('admin.lembaga.update', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function update(Request $request, string $id)
    {
        $validation = $request->validate([
            'name' => 'required',
            'images' => 'required|image|file|max:2048',
            'singkatan' => 'required',
            'dasar_hukum' => 'required',
            'alamat' => 'required',
            'profile' => 'required',
            'visi' => 'required',
            'misi' => 'required',
            'tugas' => 'required',
            'fungsi' => 'required',
            'pengurus' => 'required'
        ]);

        if ($request->file('images')) {
            if ($request->input('oldImage')) {
                Storage::delete($request->input('oldImage'));
            }

            $validation['images'] = $request->file('images')->store('post-images-lembaga');
        }

        $this->lembagaService->update($validation, $id);

        return redirect()->action([LembagaController::class, 'lembaga']);
    }

    public function delete(string $id)
    {
        $this->lembagaService->remove($id);

        return redirect()->action([LembagaController::class, 'galeri']);
    }
}
