<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tile extends Model
{
    protected $guarded = [];

    protected $casts = [
        'pixels' => 'array',
    ];
}
