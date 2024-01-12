<?php

namespace App\Services\Impl;

use App\Models\Agenda;
use App\Services\AgendaService;

class AgendaServiceImpl implements AgendaService
{
    private Agenda $agenda;

    public function __construct()
    {
        $this->agenda = new Agenda();
    }

    public function insert(array $user)
    {
        $this->agenda->create($user);
    }

    public function update(array $user, string $id)
    {
        $this->agenda->where('id', $id)->update($user);
    }

    public function showAll()
    {
        return $this->agenda->all();
    }

    public function show(string $id)
    {
        return $this->agenda->where('id', $id)->get();
    }

    public function remove(string $id)
    {
        $this->agenda->where('id', $id);
    }
}
