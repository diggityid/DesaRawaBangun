<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LembagaController extends Controller
{
    public function lembaga(): Response
    {
        $user = Auth::user();

        return response()->view('lembaga', [
            'user' => $user
        ]);
    }
}
