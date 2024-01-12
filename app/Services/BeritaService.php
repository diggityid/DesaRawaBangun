<?php

namespace App\Services;

interface BeritaService
{
    public function insert(array $user);
    public function update(array $user, string $id);
    public function showAll();
    public function show(string $id);
    public function remove(string $id);
}
