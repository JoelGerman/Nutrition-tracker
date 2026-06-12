<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::query()
            ->orderBy('name')
            ->get();

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'calories_per_100g' => ['required', 'numeric', 'min:0'],
            'protein_per_100g' => ['required', 'numeric', 'min:0'],
            'carbs_per_100g' => ['required', 'numeric', 'min:0'],
            'fat_per_100g' => ['required', 'numeric', 'min:0'],
        ]);

        Product::create([
            'user_id' => $request->user()?->id,
            'name' => $validated['name'],
            'calories_per_100g' => $validated['calories_per_100g'],
            'protein_per_100g' => $validated['protein_per_100g'],
            'carbs_per_100g' => $validated['carbs_per_100g'],
            'fat_per_100g' => $validated['fat_per_100g'],
        ]);

        return redirect()->route('products.index');
    }
}