<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('/products', 'Api\ProductController');

Route::group([
        'middleware' => ['auth:sanctum']
    ], function () {
        Route::get('/user', function (Request $request) { return $request->user(); }); // retrieving the loggedin user

        // Manage routes or any user that are loggedin
        Route::group([
            'middleware' => ['role:manage'],
            'prefix' => 'manage',
            'namespace' => 'Api/manage',
        ], function () {
            Route::apiResource('/products', 'ProductController');
        });

        // Admin routes only
        Route::group([
            'middleware' => ['role:admin'],
            'prefix' => 'admin',
            'namespace' => 'Api/admin',
        ], function () {
            Route::apiResource('/products', 'ProductController');
        });
    }
);
