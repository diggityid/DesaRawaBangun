<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\AboutService;
use Illuminate\Support\Facades\Auth;

class AboutController extends Controller
{

    private AboutService $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function about(): Response
    {

        $result = $this->aboutService->showAbout();
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
}
