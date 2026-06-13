<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DailyEntryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/products', [ProductController::class, 'index'])
    ->name('products.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

    Route::get('/products/create', [ProductController::class, 'create'])
        ->name('products.create');

    Route::post('/products', [ProductController::class, 'store'])
        ->name('products.store');

    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])
        ->name('products.edit');

    Route::put('/products/{product}', [ProductController::class, 'update'])
        ->name('products.update');

    Route::delete('/products/{product}', [ProductController::class, 'destroy'])
    ->name('products.destroy');

    Route::post('/daily-entries', [DailyEntryController::class, 'store'])
        ->name('daily-entries.store');
    
    Route::delete('/daily-entry-products/{dailyEntryProduct}', [DailyEntryController::class, 'destroy'])
    ->name('daily-entry-products.destroy');

});

require __DIR__.'/settings.php';
