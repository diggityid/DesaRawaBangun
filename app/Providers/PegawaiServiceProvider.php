<?php

namespace App\Providers;

use App\Services\Impl\PegawaiServiceImpl;
use App\Services\PegawaiService;
use Illuminate\Support\ServiceProvider;

class PegawaiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PegawaiService::class, PegawaiServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
