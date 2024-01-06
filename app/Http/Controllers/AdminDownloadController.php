<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\DownloadService;
use Illuminate\Http\Response;

class AdminDownloadController extends Controller
{
    private DownloadService $downloadService;

    public function __construct(DownloadService $downloadService) {
        $this->downloadService = $downloadService;
    }

    public function download(): Response
    {
        return response()->view('admin.download');
    }

    public function insertDownload(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required',
            'files' => 'required',
            'detail' => 'detail'
        ]);

        $this->downloadService->insertDownload($validate);
    }
}
