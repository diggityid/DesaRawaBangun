<?php

namespace App\Http\Controllers;

use App\Services\AboutService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminAboutController extends Controller
{

    private AboutService $aboutService;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
    }

    public function about(): Response
    {
        return response()->view('admin.about', []);
    }

    public function doAbout(Request $request): Response | RedirectResponse
    {

        $validate = $request->validate([
            'intro' => 'required',
            'visi' => 'required',
            'misi' => 'required',
            'history' => 'required'
        ]);

        if ($this->aboutService->checkAbout()) {
            $this->aboutService->insertAbout($validate);

            return redirect()->route('about');
        } else {
            $this->aboutService->updateAbout($validate);

            return redirect()->route('about');
        }
    }
}
