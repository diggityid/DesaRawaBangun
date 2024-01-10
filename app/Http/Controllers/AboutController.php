<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\AboutService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class AboutController extends Controller
{

    private AboutService $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function about(): Response
    {

        $result = $this->aboutService->show();
        $user = Auth::user();

        $content = [
            'intro' => $result->intro ?? null,
            'visi' => $result->visi ?? null,
            'misi' => $result->misi ?? null, 
            'history' => $result->history ?? null
        ];

        return response()->view('about', [
            'user' => $user,
            'content' => $content
        ]);

    }

    public function admin(): Response
    {
        return response()->view('admin.about', [

        ]);
    }

    public function store(Request $request): Response | RedirectResponse
    {

        $validate = $request->validate([
            'intro' => 'required',
            'visi' => 'required',
            'misi' => 'required',
            'history' => 'required'
        ]);

        if ($this->aboutService->check()) {
            $this->aboutService->insert($validate);
        } else {
            $this->aboutService->update($validate);
        }

        return redirect()->route('about');
    }
}
