<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Motorcycle extends Model
{
    use HasFactory;

    protected $table = 'motorcycles';

    protected $fillable = [
        'model',
        'min_price',
        'max_price',
        'onsale',
        'stock_quantity',
        'stock_status',
        'rating_count',
        'average_rating',
        'total_sales',
        'tax_status',
        'tax_class',
        'image'
    ];
}
