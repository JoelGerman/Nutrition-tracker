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
        'name' => 'Banana',
        'category' => 'Fruits',
        'calories_per_100g' => 89,
        'protein_per_100g' => 1.1,
        'carbs_per_100g' => 23,
        'fat_per_100g' => 0.3,
    ],
    [
        'name' => 'Orange',
        'category' => 'Fruits',
        'calories_per_100g' => 47,
        'protein_per_100g' => 0.9,
        'carbs_per_100g' => 12,
        'fat_per_100g' => 0.1,
    ],
    [
        'name' => 'Strawberries',
        'category' => 'Fruits',
        'calories_per_100g' => 32,
        'protein_per_100g' => 0.7,
        'carbs_per_100g' => 7.7,
        'fat_per_100g' => 0.3,
    ],

    [
        'name' => 'Tomato',
        'category' => 'Vegetables',
        'calories_per_100g' => 18,
        'protein_per_100g' => 0.9,
        'carbs_per_100g' => 3.9,
        'fat_per_100g' => 0.2,
    ],
    [
        'name' => 'Cucumber',
        'category' => 'Vegetables',
        'calories_per_100g' => 15,
        'protein_per_100g' => 0.7,
        'carbs_per_100g' => 3.6,
        'fat_per_100g' => 0.1,
    ],
    [
        'name' => 'Potato',
        'category' => 'Vegetables',
        'calories_per_100g' => 77,
        'protein_per_100g' => 2,
        'carbs_per_100g' => 17,
        'fat_per_100g' => 0.1,
    ],
    [
        'name' => 'Carrot',
        'category' => 'Vegetables',
        'calories_per_100g' => 41,
        'protein_per_100g' => 0.9,
        'carbs_per_100g' => 10,
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
        'name' => 'Beef',
        'category' => 'Meat',
        'calories_per_100g' => 250,
        'protein_per_100g' => 26,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 15,
    ],
    [
        'name' => 'Pork',
        'category' => 'Meat',
        'calories_per_100g' => 242,
        'protein_per_100g' => 27,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 14,
    ],
    [
        'name' => 'Turkey Breast',
        'category' => 'Meat',
        'calories_per_100g' => 135,
        'protein_per_100g' => 30,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 1,
    ],

    [
        'name' => 'Salmon',
        'category' => 'Fish',
        'calories_per_100g' => 208,
        'protein_per_100g' => 20,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 13,
    ],
    [
        'name' => 'Tuna',
        'category' => 'Fish',
        'calories_per_100g' => 132,
        'protein_per_100g' => 28,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 1,
    ],
    [
        'name' => 'Cod',
        'category' => 'Fish',
        'calories_per_100g' => 82,
        'protein_per_100g' => 18,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 0.7,
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
        'name' => 'Milk',
        'category' => 'Dairy',
        'calories_per_100g' => 60,
        'protein_per_100g' => 3.2,
        'carbs_per_100g' => 4.8,
        'fat_per_100g' => 3.2,
    ],
    [
        'name' => 'Greek Yogurt',
        'category' => 'Dairy',
        'calories_per_100g' => 59,
        'protein_per_100g' => 10,
        'carbs_per_100g' => 3.6,
        'fat_per_100g' => 0.4,
    ],
    [
        'name' => 'Cheese',
        'category' => 'Dairy',
        'calories_per_100g' => 402,
        'protein_per_100g' => 25,
        'carbs_per_100g' => 1.3,
        'fat_per_100g' => 33,
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
        'name' => 'Pasta',
        'category' => 'Grains',
        'calories_per_100g' => 131,
        'protein_per_100g' => 5,
        'carbs_per_100g' => 25,
        'fat_per_100g' => 1.1,
    ],
    [
        'name' => 'Buckwheat',
        'category' => 'Grains',
        'calories_per_100g' => 343,
        'protein_per_100g' => 13,
        'carbs_per_100g' => 72,
        'fat_per_100g' => 3.4,
    ],
    [
        'name' => 'Oatmeal',
        'category' => 'Porridge',
        'calories_per_100g' => 389,
        'protein_per_100g' => 16.9,
        'carbs_per_100g' => 66.3,
        'fat_per_100g' => 6.9,
    ],
    [
        'name' => 'Corn Flakes',
        'category' => 'Cereal',
        'calories_per_100g' => 357,
        'protein_per_100g' => 8,
        'carbs_per_100g' => 84,
        'fat_per_100g' => 0.4,
    ],

    [
        'name' => 'Ketchup',
        'category' => 'Sauces',
        'calories_per_100g' => 112,
        'protein_per_100g' => 1.3,
        'carbs_per_100g' => 26,
        'fat_per_100g' => 0.2,
    ],
    [
        'name' => 'Mayonnaise',
        'category' => 'Sauces',
        'calories_per_100g' => 680,
        'protein_per_100g' => 1,
        'carbs_per_100g' => 1,
        'fat_per_100g' => 75,
    ],
    [
        'name' => 'Mustard',
        'category' => 'Sauces',
        'calories_per_100g' => 66,
        'protein_per_100g' => 4.4,
        'carbs_per_100g' => 5.8,
        'fat_per_100g' => 3.3,
    ],

    [
        'name' => 'Coca Cola',
        'category' => 'Drinks',
        'calories_per_100g' => 42,
        'protein_per_100g' => 0,
        'carbs_per_100g' => 10.6,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Sprite',
        'category' => 'Drinks',
        'calories_per_100g' => 40,
        'protein_per_100g' => 0,
        'carbs_per_100g' => 10,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Fanta',
        'category' => 'Drinks',
        'calories_per_100g' => 48,
        'protein_per_100g' => 0,
        'carbs_per_100g' => 12,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Coffee',
        'category' => 'Drinks',
        'calories_per_100g' => 2,
        'protein_per_100g' => 0.1,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Tea',
        'category' => 'Drinks',
        'calories_per_100g' => 1,
        'protein_per_100g' => 0,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Green Tea',
        'category' => 'Drinks',
        'calories_per_100g' => 1,
        'protein_per_100g' => 0,
        'carbs_per_100g' => 0,
        'fat_per_100g' => 0,
    ],
    [
        'name' => 'Cocoa',
        'category' => 'Drinks',
        'calories_per_100g' => 77,
        'protein_per_100g' => 3.5,
        'carbs_per_100g' => 10,
        'fat_per_100g' => 2.5,
    ],

    [
        'name' => 'Potato Chips',
        'category' => 'Snacks',
        'calories_per_100g' => 536,
        'protein_per_100g' => 7,
        'carbs_per_100g' => 53,
        'fat_per_100g' => 35,
    ],
    [
        'name' => 'Chocolate',
        'category' => 'Snacks',
        'calories_per_100g' => 546,
        'protein_per_100g' => 4.9,
        'carbs_per_100g' => 61,
        'fat_per_100g' => 31,
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