<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('spa');
});

Route::get('/{any}', 'AppController@index')->where('any', '.*');