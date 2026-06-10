<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailyEntry extends Model
{
    protected $fillable = [
        'user_id',
        'date',
    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(DailyEntryProduct::class);
    }
}