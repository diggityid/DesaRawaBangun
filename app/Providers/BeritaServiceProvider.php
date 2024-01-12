<?php

namespace App\Providers;

use App\Services\BeritaService;
use App\Services\Impl\BeritaServiceImpl;
use Illuminate\Support\ServiceProvider;

class BeritaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(BeritaService::class, BeritaServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
