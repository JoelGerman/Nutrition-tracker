<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        abort_unless($request->user()?->isAdmin(), 403);

        $users = User::query()
            ->orderBy('name')
            ->get(['id', 'name', 'email', 'role', 'calorie_goal']);

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function updateRole(Request $request, User $user): RedirectResponse
    {
        abort_unless($request->user()?->isAdmin(), 403);

        $validated = $request->validate([
            'role' => ['required', 'in:user,admin'],
        ]);

        $user->update([
            'role' => $validated['role'],
        ]);

        return redirect()->route('admin.users.index');
    }
}