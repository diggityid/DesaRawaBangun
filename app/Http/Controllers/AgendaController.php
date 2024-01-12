<?php

namespace App\Http\Controllers;

use App\Services\AgendaService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AgendaController extends Controller
{
    private AgendaService $agendaService;

    public function __construct(AgendaService $agendaService)
    {
        $this->agendaService = $agendaService;
    }

    private function user()
    {
        $user = Auth::user();

        return $user;
    }

    public function agenda(): Response
    {
        $result = $this->agendaService->showAll();

        return response()->view('agenda', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }
}
