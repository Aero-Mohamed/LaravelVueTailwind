<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * handle requests , need this to run VueRouter history mode
 */
Route::get('/{vue?}', function(){
    return view('welcome');
})->where('vue', '[\/\w\.-]*');
