<?php

use App\Http\Controllers\DailyEntryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/products', [ProductController::class, 'index'])
    ->name('products.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('/products/create', [ProductController::class, 'create'])
        ->name('products.create');

    Route::post('/products', [ProductController::class, 'store'])
        ->name('products.store');

    Route::post('/daily-entries', [DailyEntryController::class, 'store'])
        ->name('daily-entries.store');

});

require __DIR__.'/settings.php';
