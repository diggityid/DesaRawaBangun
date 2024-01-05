<?php

namespace App\Providers;

use App\Services\Impl\PengumumanServiceImpl;
use App\Services\PengumumanService;
use Illuminate\Support\ServiceProvider;

class PengumumanServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PengumumanService::class, PengumumanServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
