<?php

namespace App\Http\Controllers;

use App\Models\DailyEntry;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DailyEntryController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'product_id' => ['required', 'exists:products,id'],
            'amount' => ['required', 'numeric', 'min:1'],
        ]);

        $product = Product::findOrFail($validated['product_id']);

        $dailyEntry = DailyEntry::firstOrCreate([
            'user_id' => $request->user()->id,
            'date' => now()->toDateString(),
        ]);

        $amount = $validated['amount'];

        $dailyEntry->products()->create([
            'product_id' => $product->id,
            'amount' => $amount,
            'total_calories' => $product->calories_per_100g * $amount / 100,
            'total_protein' => $product->protein_per_100g * $amount / 100,
            'total_carbs' => $product->carbs_per_100g * $amount / 100,
            'total_fat' => $product->fat_per_100g * $amount / 100,
        ]);

        return redirect()->route('products.index');
    }
}
