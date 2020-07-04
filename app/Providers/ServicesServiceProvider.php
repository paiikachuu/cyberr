<?php

namespace App\Providers;

use App\Services\Contracts\IProductService;
use App\Services\ProductService;
use Illuminate\Support\ServiceProvider;

class ServicesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->bind(
        //     'App\Services\Contracts\IProductService',
        //     'App\Services\ProductService'
        // );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
         $this->app->bind(IProductService::class, ProductService::class);
    }
}
