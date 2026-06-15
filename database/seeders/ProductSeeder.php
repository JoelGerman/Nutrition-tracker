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
                'category' => 'Fruits',
                'calories_per_100g' => 52,
                'protein_per_100g' => 0.3,
                'carbs_per_100g' => 14,
                'fat_per_100g' => 0.2,
            ],
            [
                'name' => 'Chicken Breast',
                'category' => 'Meat',
                'calories_per_100g' => 165,
                'protein_per_100g' => 31,
                'carbs_per_100g' => 0,
                'fat_per_100g' => 3.6,
            ],
            [
                'name' => 'Rice',
                'category' => 'Grains',
                'calories_per_100g' => 130,
                'protein_per_100g' => 2.7,
                'carbs_per_100g' => 28,
                'fat_per_100g' => 0.3,
            ],
            [
                'name' => 'Egg',
                'category' => 'Dairy',
                'calories_per_100g' => 155,
                'protein_per_100g' => 13,
                'carbs_per_100g' => 1.1,
                'fat_per_100g' => 11,
            ],
            [
                'name' => 'Oatmeal',
                'category' => 'Porridge',
                'calories_per_100g' => 389,
                'protein_per_100g' => 16.9,
                'carbs_per_100g' => 66.3,
                'fat_per_100g' => 6.9,
            ],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(
                [
                    'name' => $product['name'],
                    'user_id' => null,
                ],
                array_merge($product, [
                    'user_id' => null,
                ])
            );
        }
    }
}