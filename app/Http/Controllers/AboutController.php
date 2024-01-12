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

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function about(): Response
    {

        $result = $this->aboutService->show();

        return response()->view('about', [
            'user' => self::user(),
            'content' => $result
        ]);
    }

    public function create(): Response
    {   
        $result = $this->aboutService->show();

        return response()->view('admin.about.update', [
            'user' => self::user(),
            'content' => $result
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
