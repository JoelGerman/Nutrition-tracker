<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->renameColumn('calories', 'calories_per_100g');
            $table->renameColumn('protein', 'protein_per_100g');
            $table->renameColumn('carbs', 'carbs_per_100g');
            $table->renameColumn('fat', 'fat_per_100g');
            
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->renameColumn('calories_per_100g', 'calories');
            $table->renameColumn('protein_per_100g', 'protein');
            $table->renameColumn('carbs_per_100g', 'carbs');
            $table->renameColumn('fat_per_100g', 'fat');
        });
    }
};
