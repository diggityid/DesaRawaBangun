<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function home(): Response
    {
        $user = Auth::user();

        if ($user) {
            return response()->view('home', [
                'user' => true
            ]);
        } else {
            return response()->view('home', [
                'user' => false]
            );
        }
    }
}
