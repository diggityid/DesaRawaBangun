<?php

namespace App\Services\Impl;

use App\Models\Download;
use App\Services\DownloadService;

class DownloadServiceImpl implements DownloadService
{
    private Download $downloadModel;

    public function __construct() {
        $this->downloadModel = new Download();
    }

    public function getDownload(string $id)
    {
        
    }

    public function insertDownload(array $input)
    {
        $this->downloadModel->create($input);
    }

    public function updateDownload(array $input, string $id)
    {
        $this->downloadModel->where('id', $id)->update($input);
    }

    public function removeDownload(string $id)
    {
        $this->downloadModel->where('id', $id)->delete();
    }
}
