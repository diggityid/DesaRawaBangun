<?php

namespace App\Services;

interface DownloadService
{
    public function get(string $id);
    public function insert(array $input);
    public function update(array $input, string $id);
    public function remove(string $id);
    public function show();
}
