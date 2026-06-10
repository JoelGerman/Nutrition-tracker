<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailyEntryProduct extends Model
{
    protected $fillable = [
        'daily_entry_id',
        'product_id',
        'amount',
        'total_calories',
        'total_protein',
        'total_fat',
        'total_carbs',
    ];

    public function dailyEntry()
    {
        return $this->belongsTo(DailyEntry::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}