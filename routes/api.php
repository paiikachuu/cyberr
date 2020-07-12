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

// public routes
Route::post('register', 'API\Auth\RegisterController@register');
Route::post('login', 'API\Auth\LoginController@login');

// must be in group auth
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('logout', 'API\Auth\LoginController@logout');

// Route::middleware('auth:api')->get('/user' , function (Request $request) {
//     return $request->user();
// });

Route::apiResource('/products', 'Api\ProductController');
