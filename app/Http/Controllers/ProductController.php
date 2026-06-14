<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->input('search');
        $user = $request->user();

        $products = Product::query()
            ->when(! $user?->isAdmin(), function ($query) use ($user) {
                $query->where(function ($query) use ($user) {
                    $query->whereNull('user_id');

                    if ($user) {
                        $query->orWhere('user_id', $user->id);
                    }
                });
            })
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->orderBy('name')
            ->get();

        return Inertia::render('Products/Index', [
            'products' => $products,
            'search' => $search,
            'canCreateProducts' => $user !== null,
            'canAddToDay' => $user !== null,
            'canDeleteProducts' => $user?->isAdmin() ?? false,
            'currentUserId' => $user?->id,    
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

    public function edit(Request $request, Product $product): Response
    {
        $user = $request->user();

        abort_unless(
        $user?->isAdmin() || $product->user_id === $user?->id,
        403
        );
        return Inertia::render('Products/Edit', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $user = $request->user();

        abort_unless(
            $user?->isAdmin() || $product->user_id === $user?->id,
            403
        );
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'calories_per_100g' => ['required', 'numeric', 'min:0'],
            'protein_per_100g' => ['required', 'numeric', 'min:0'],
            'carbs_per_100g' => ['required', 'numeric', 'min:0'],
            'fat_per_100g' => ['required', 'numeric', 'min:0'],
        ]);

        $product->update($validated);

        return redirect()->route('products.index');
    }

    public function destroy(Request $request, Product $product): RedirectResponse
    {
        $user = $request->user();

        abort_unless(
            $user?->isAdmin() || $product->user_id === $user?->id,
            403
        );

        $product->delete();

        return redirect()->route('products.index');
    }
}