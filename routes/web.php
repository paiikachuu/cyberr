<?php

use Illuminate\Support\Facades\Route;

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');

Route::view('/{any}', 'spa')->where('any', '.*');
