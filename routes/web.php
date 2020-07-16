<?php

use Illuminate\Support\Facades\Route;


Route::view('/{any}', 'spa')->where('any', '.*');