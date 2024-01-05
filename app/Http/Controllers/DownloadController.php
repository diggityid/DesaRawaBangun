<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class DownloadController extends Controller
{
    function download(): Response
    {
        $user = Auth::user();

        return response()->view('download', [
            'user' => $user
        ]);
    }
}
