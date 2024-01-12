<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\BeritaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    private BeritaService $beritaService;

    public function __construct(BeritaService $beritaService)
    {
        $this->beritaService = $beritaService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function berita(): Response
    {
        $result = $this->beritaService->showAll();

        return response()->view('berita', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {
        return response()->view('admin.berita.create', [
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
            $validation['images'] = $request->file('images')->store('post-images-berita');
        }

        $this->beritaService->insert($validation);

        return redirect()->action([BeritaController::class, 'berita']);
    }

    public function edit(string $id): Response
    {
        $result = $this->beritaService->show($id);

        return response()->view('admin.berita.update', [
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

            $validation['images'] = $request->file('images')->store('post-images-berita');
        }

        $this->beritaService->update($validation, $id);

        return redirect()->action([BeritaController::class, 'berita']);
    }

    public function delete(string $id): RedirectResponse
    {
        $this->beritaService->remove($id);

        return redirect()->action([BeritaController::class, 'berita']);
    }

    public function show(string $id): Response
    {
        $result = $this->beritaService->show($id);

        return response()->view('selengkapnya.berita', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }
}
