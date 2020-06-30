<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', function () {
    return view('home');
});

Route::get('/{any}', 'AppController@index')->where('any', '.*');
