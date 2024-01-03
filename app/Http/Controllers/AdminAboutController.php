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
            'intro' => 'require',
            'visi' => 'require',
            'misi' => 'require',
            'history' => 'require'
        ]);

        $intro = $request->input('inputIntro');
        $visi = $request->input('inputVisi');
        $misi = $request->input('inputMisi');
        $history = $request->input('inputHistory');

        $visiJson = json_encode($visi);
        $misiJson = json_encode($misi);

        $input = [
            'intro' => $intro,
            'visi' => $visiJson,
            'misi' => $misiJson,
            'history' => $history,
        ];

        if ($this->aboutService->checkAbout()) {
            $this->aboutService->insertAbout($input);

            return redirect()->route('about');
        } else {
            $this->aboutService->updateAbout($input);

            return redirect()->route('about');
        }
    }
}
