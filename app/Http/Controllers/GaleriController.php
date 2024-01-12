<?php

namespace App\Http\Controllers;

use App\Services\GaleriService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class GaleriController extends Controller
{

    private GaleriService $galeriService;

    public function __construct(GaleriService $galeriService)
    {
        $this->galeriService = $galeriService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function galeri(): Response
    {
        $result = $this->galeriService->showAll();

        return response()->view('galeri', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {
        return response()->view('admin.galeri.create', [
            'user' => $this->user()
        ]);
    }

    public function store(Request $request)
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048'
        ]);

        if ($request->file('images')) {
            $validation['images'] = $request->file('images')->store('post-images-galeri');
        }

        $this->galeriService->insert($validation);

        return redirect()->action([GaleriController::class, 'galeri']);
    }

    public function edit(string $id)
    {
        $result = $this->galeriService->show($id);

        return response()->view('admin.galeri.update', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function update(Request $request, string $id)
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048'
        ]);

        if ($request->file('images')) {
            if ($request->input('oldImage')) {
                Storage::delete($request->input('oldImage'));
            }

            $validation['images'] = $request->file('images')->store('post-images-galeri');
        }

        $this->galeriService->update($validation, $id);

        return redirect()->action([GaleriController::class, 'galeri']);
    }

    public function delete(string $id)
    {
        $this->galeriService->remove($id);

        return redirect()->action([GaleriController::class, 'galeri']);
    }
}
