<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'calories',
        'protein',
        'carbs',
        'fat',
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