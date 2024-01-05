<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class GaleriController extends Controller
{
    function galeri():Response
    {
        $user = Auth::user();

        return response()->view('galeri', [
            'user' => $user
        ]);
    }
}
