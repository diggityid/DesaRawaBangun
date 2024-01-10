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

    public function get(string $id)
    {
        
    }

    public function insert(array $input)
    {
        $this->downloadModel->create($input);
    }

    public function update(array $input, string $id)
    {
        $this->downloadModel->where('id', $id)->update($input);
    }

    public function remove(string $id)
    {
        $this->downloadModel->where('id', $id)->delete();
    }

    public function show()
    {
        
    }
}
