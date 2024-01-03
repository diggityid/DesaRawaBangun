<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    public function dologin(Request $request)
    {
        $response = Auth::attempt([
            'email' => $request->post('email', 'wrong'),
            'password' => $request->post('password', 'wrong')
        ], true);

        if ($response) {
            Session::regenerate();
            return redirect('/');
        } else {
            return 'wrong credential';
        }
    }

    public function current()
    {
        $user = Auth::user();
        if ($user) {
            return "Hello $user->name";
        } else {
            return "Hello Guest";
        }
    }
}
