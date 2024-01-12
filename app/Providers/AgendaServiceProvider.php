<?php

namespace App\Providers;

use App\Services\AgendaService;
use App\Services\Impl\AgendaServiceImpl;
use Illuminate\Support\ServiceProvider;

class AgendaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(AgendaService::class, AgendaServiceImpl::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
