<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'calories_per_100g',
        'protein_per_100g',
        'carbs_per_100g',
        'fat_per_100g',
];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function dailyEntryProducts()
    {
        return $this->hasMany(DailyEntryProduct::class);
    }
}