<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('/products', 'Api\ProductController');

Route::group([
        'middleware' => ['auth:sanctum']
    ], function () {
        // dd('asdf');
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
