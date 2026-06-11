<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
       User::updateOrCreate(
        ['email' => 'admin@example.com'],
        [
            'name' => 'Admin',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]
       );

       User::updateOrCreate(
        ['email' => 'user@example.com'],
        [
            'name' => 'User',
            'password' => Hash::make('password'),
            'role' => 'user',
        ]
       );
    }

}
