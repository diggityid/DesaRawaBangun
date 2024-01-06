<?php

namespace App\Services;

interface DownloadService
{
    public function getDownload(string $id);
    public function insertDownload(array $input);
    public function updateDownload(array $input, string $id);
    public function removeDownload(string $id);
}
