<?php

namespace App\Services\Impl;

use App\Models\Galeri;
use App\Services\GaleriService;

class GaleriServiceImpl implements GaleriService
{
    private Galeri $galeriModel;

    public function __construct()
    {
        $this->galeriModel = new Galeri();
    }
}
