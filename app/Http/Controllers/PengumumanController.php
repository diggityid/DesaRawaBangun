<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\PengumumanService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PengumumanController extends Controller
{

    private PengumumanService $pengumumanService;

    public function __construct(PengumumanService $pengumumanService)
    {
        $this->pengumumanService = $pengumumanService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function pengumuman(): Response
    {
        $result = $this->pengumumanService->showAll();

        return response()->view('pengumuman', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {
        return response()->view('admin.pengumuman.create', [
            'user' => $this->user()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048',
            'detail' => 'required'
        ]);

        if ($request->file('images')) {
            $validation['images'] = $request->file('images')->store('post-images-pengumuman');
        }

        $this->pengumumanService->insert($validation);

        return redirect()->action([PengumumanController::class, 'pengumuman']);
    }

    public function edit(string $id): Response
    {
        $result = $this->pengumumanService->show($id);

        return response()->view('admin.pengumuman.update', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048',
            'detail' => 'required'
        ]);

        if ($request->file('images')) {
            if ($request->input('oldImage')) {
                Storage::delete($request->input('oldImage'));
            }

            $validation['images'] = $request->file('images')->store('post-images-pengumuman');
        }

        $this->pengumumanService->update($validation, $id);

        return redirect()->action([PengumumanController::class, 'pengumuman']);
    }

    public function delete(string $id): RedirectResponse
    {
        $this->pengumumanService->remove($id);

        return redirect()->action([PengumumanController::class, 'pengumuman']);
    }

    public function show(string $id): Response
    {
        $result = $this->pengumumanService->show($id);

        return response()->view('selengkapnya.pengumuman', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }
}
