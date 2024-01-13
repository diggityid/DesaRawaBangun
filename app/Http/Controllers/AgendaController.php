<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\AgendaService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

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

    public function create(): Response
    {
        return response()->view('admin.agenda.create', [
            'user' => $this->user()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048',
            'location' => 'required',
            'start' => 'required',
            'finish' => 'required',
            'detail' => 'required'
        ]);

        if ($request->file('images')) {
            $validation['images'] = $request->file('images')->store('post-images-agenda');
        }

        $this->agendaService->insert($validation);

        return redirect()->action([AgendaController::class, 'agenda']);
    }

    public function edit(string $id): Response
    {
        $result = $this->agendaService->show($id);

        return response()->view('admin.agenda.update', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $validation = $request->validate([
            'title' => 'required',
            'images' => 'required|image|file|max:2048',
            'location' => 'required',
            'start' => 'required',
            'finish' => 'required',
            'detail' => 'required'
        ]);

        if ($request->file('images')) {
            if ($request->input('oldImage')) {
                Storage::delete($request->input('oldImage'));
            }

            $validation['images'] = $request->file('images')->store('post-images-agenda');
        }

        $this->agendaService->update($validation, $id);

        return redirect()->action([AgendaController::class, 'agenda']);
    }

    public function delete(string $id): RedirectResponse
    {
        $this->agendaService->remove($id);

        return redirect()->action([AgendaController::class, 'agenda']);
    }

    public function show(string $id): Response
    {
        $result = $this->agendaService->show($id);

        return response()->view('selengkapnya.agenda', [
            'user' => $this->user(),
            'content' => $result
        ]);
    }
}
