<?php

namespace App\Providers;

use App\Services\AboutService;
use App\Services\Impl\AboutServiceImpl;
use Illuminate\Support\ServiceProvider;

class AboutServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(AboutService::class, AboutServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
