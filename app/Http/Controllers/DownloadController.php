<?php

namespace App\Http\Controllers;

use App\Services\DownloadService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class DownloadController extends Controller
{

    public DownloadService $downloadService;

    public function __construct(DownloadService $downloadService)
    {
        $this->downloadService = $downloadService;
    }

    private function check()
    {
        $user = Auth::user();

        return $user;
    }


    public function download(): Response
    {
        return response()->view('download', [
            'user' => self::check()
        ]);
    }

    public function admin(): Response
    {
        return response()->view('admin.download', [
            'user' => self::check()
        ]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required',
            'files' => 'image|file|max:2048',
            'detail' => 'required'
        ]);

        $request->file('image')->store('post-download');
        $this->downloadService->insert($validate);
    }
}
