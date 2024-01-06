<?php

namespace App\Providers;

use App\Services\DownloadService;
use App\Services\Impl\DownloadServiceImpl;
use Illuminate\Support\ServiceProvider;

class DownloadServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DownloadService::class, DownloadServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
