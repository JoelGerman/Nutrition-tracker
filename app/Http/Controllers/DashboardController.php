<?php

namespace App\Http\Controllers;

use App\Models\DailyEntry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $dailyEntry = DailyEntry::query()
            ->where('user_id', $request->user()?->id)
            ->where('date', now()->toDateString())
            ->with('products.product')
            ->first();

        $entries = $dailyEntry?->products ?? collect();

        return Inertia::render('Dashboard/Index', [
            'entries' => $entries,
            'totals' => [
                'calories' => $entries->sum('total_calories'),
                'protein' => $entries->sum('total_protein'),
                'carbs' => $entries->sum('total_carbs'),
                'fat' => $entries->sum('total_fat'),
            ],
            'calorieGoal' => $request->user()?->calorie_goal ?? 2000,
        ]);
    }

    public function updateCalorieGoal(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'calorie_goal' => ['required', 'integer', 'min:1', 'max:10000'],
        ]);

        $request->user()?->update([
            'calorie_goal' => $validated['calorie_goal'],
        ]);

        return redirect()->route('dashboard');
    }
}