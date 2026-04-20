<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    public function run(): void
    {
        $colors = [
            ['name' => 'Brick Dark',       'hex' => '#7f1308'],
            ['name' => 'Brick Light',       'hex' => '#a85d17'],
            ['name' => 'Steel Dark',        'hex' => '#737373'],
            ['name' => 'Steel Light',       'hex' => '#b5b5b5'],
            ['name' => 'White',             'hex' => '#ffffff'],
            ['name' => 'Water Blue',        'hex' => '#4c51fa'],
            ['name' => 'Bush Dark',         'hex' => '#005d1b'],
            ['name' => 'Bush Light',        'hex' => '#8bdc31'],
            ['name' => 'Tank Yellow Dark',  'hex' => '#797a19'],
            ['name' => 'Tank Yellow',       'hex' => '#f3a742'],
            ['name' => 'Tank Yellow Light', 'hex' => '#e7e8a3'],
            ['name' => 'Tank Green Dark',   'hex' => '#00600e'],
            ['name' => 'Tank Green',        'hex' => '#009947'],
            ['name' => 'Tank Green Light',  'hex' => '#b4f4d3'],
        ];

        foreach ($colors as $key => $color) {
            $insert[] = [
                'id' => $key + 1,
                ...$color,
            ];
        }

        Color::insert($insert);
    }
}
