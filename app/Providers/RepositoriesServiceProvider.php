<?php

namespace App\Providers;

use App\Repositories\Contracts\IProductRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;

class RepositoriesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->bind(
        //     'App\Repositories\Contracts\IProductRepository',
        //     'App\Repositories\ProductRepository'
        // );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(IProductRepository::class, ProductRepository::class);
    }
}
