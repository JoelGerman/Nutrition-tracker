<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Apple',
                'calories_per_100g' => 52,
                'protein_per_100g' => 0.3,
                'carbs_per_100g' => 14,
                'fat_per_100g' => 0.2,
            ],
            [
                'name' => 'Chicken Breast',
                'calories_per_100g' => 165,
                'protein_per_100g' => 31,
                'carbs_per_100g' => 0,
                'fat_per_100g' => 3.6,
            ],
            [
                'name' => 'Rice',
                'calories_per_100g' => 130,
                'protein_per_100g' => 2.7,
                'carbs_per_100g' => 28,
                'fat_per_100g' => 0.3,
            ],
            [
                'name' => 'Egg',
                'calories_per_100g' => 155,
                'protein_per_100g' => 13,
                'carbs_per_100g' => 1.1,
                'fat_per_100g' => 11,
            ],
            [
                'name' => 'Oatmeal',
                'calories_per_100g' => 68,
                'protein_per_100g' => 2.4,
                'carbs_per_100g' => 12,
                'fat_per_100g' => 1.4,
            ],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(
                ['name' => $product['name']],
                $product
            );
        }
    }
}