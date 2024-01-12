<?php

namespace App\Providers;

use App\Services\Impl\LembagaServiceImpl;
use App\Services\LembagaService;
use Illuminate\Support\ServiceProvider;

class LembagaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(LembagaService::class, LembagaServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
