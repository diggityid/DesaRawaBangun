<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PegawaiController extends Controller
{
    public function pegawai(): Response
    {
        $user = Auth::user();

        return response()->view('pegawai', [
            'user' => $user
        ]);
    }
}
