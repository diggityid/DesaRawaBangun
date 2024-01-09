<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PengumumanController extends Controller
{
    function pengumuman(): Response
    {
        $user = Auth::user();

        return response()->view('pengumuman', [
            'user' => $user
        ]);
    }
}