<?php

namespace App\Http\Controllers;

use App\Services\GeografisService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class GeografisController extends Controller
{

    private GeografisService $geografisService;

    public function __construct(GeografisService $geografisService)
    {
        $this->geografisService = $geografisService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function geografis():Response
    {
        $result = $this->geografisService->showAll();

        return response()->view('geografis', [
            'user' => $this->user(),
            'content' => $result 
        ]);
    }
}
