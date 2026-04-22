<?php

namespace Database\Seeders;

use App\Models\Tile;
use Illuminate\Database\Seeder;

class TileSeeder extends Seeder
{
    public function run(): void
    {
        $tiles = [
            [
                'name' => 'Solid',
                'size' => 8,
                'pixels' => [4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4, 5, 5, 5, 5, 3, 3, 4, 4, 5, 5, 5, 5, 3, 3, 4, 4, 5, 5, 5, 5, 3, 3, 4, 4, 5, 5, 5, 5, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            ],
            [
                'name' => 'Bush',
                'size' => 8,
                'pixels' => [null, 7, 7, 7, 7, 7, 8, null, 7, 7, 7, 8, 7, 8, 7, 8, 7, 7, 7, 7, 7, 8, 8, 8, 7, 7, 7, 8, 8, 7, 7, 8, 7, 7, 8, 7, 8, 8, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, null, 8, 8, 7, 8, 8, 8, null],
            ],
            [
                'name' => 'Brick',
                'size' => 8,
                'pixels' => [1, 1, 1, 1, 3, 1, 1, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
            ],
            [
                'name' => 'Water',
                'size' => 8,
                'pixels' => [6, 6, 6, 6, 6, 6, 6, 5, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 5, 6, 5, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6],
            ],
            [
                'name' => 'Ice',
                'size' => 8,
                'pixels' => [3, 4, 4, 5, 3, 4, 4, 5, 4, 4, 4, 4, 4, 4, 5, 3, 4, 4, 4, 4, 4, 5, 3, 4, 5, 4, 4, 4, 5, 3, 4, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 4, 5, 3, 4, 4, 5, 3, 4, 5, 3, 4, 4, 5, 3, 4, 5, 3, 4, 4, 5, 3, 4, 4],
            ],
            [
                'name' => 'Eagle',
                'size' => 16,
                'pixels' => [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, null, null, null, null, 3, 3, 3, null, null, null, null, null, 3, 3, null, 3, 3, null, null, null, null, 3, 1, 3, null, null, null, 3, 3, null, 3, 3, 3, 3, null, null, null, 3, 3, null, null, null, 3, 3, 3, 3, null, 3, 3, 3, null, null, null, 3, 3, null, null, null, 3, 3, 3, null, 3, 3, 3, 3, 3, 3, null, 3, 3, null, 3, 3, 3, 3, 3, 3, null, null, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, null, null, null, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, null, null, null, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, null, null, null, null, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, null, null, null, null, null, 3, 3, 3, null, 3, 3, null, 3, 3, null, null, null, null, null, null, null, null, null, null, null, 3, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, 3, 3, 3, 3, null, null, null, null, null, null, null, null, null, null, 3, 3, 3, 3, 3, 3, 3, 3, null, null, null, null, null, null, null, null, 3, 3, null, 3, 3, null, 3, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            ],
            [
                'name' => 'Player 1',
                'size' => 16,
                'pixels' => [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 11, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 11, null, null, null, null, null, null, null, null, null, 11, 9, 9, null, null, null, 11, null, null, null, 11, 9, 9, null, null, null, 11, 10, 11, null, null, null, 11, null, null, null, 9, 10, 10, null, null, null, 9, 9, 11, null, 11, 10, 11, 9, 9, null, 9, 9, 9, null, null, null, 11, 10, 11, 11, 11, 10, 10, 10, 10, 9, 9, 10, 10, null, null, null, 9, 9, 11, 11, 10, 11, 11, 10, 10, 10, 9, 9, 9, null, null, null, 11, 10, 11, 11, 10, 11, 10, 9, 10, 10, 9, 10, 10, null, null, null, 9, 9, 11, 11, 10, 11, 10, 9, 10, 10, 9, 9, 9, null, null, null, 11, 10, 11, 11, 11, 10, 9, 9, 10, 10, 9, 10, 10, null, null, null, 9, 9, 11, 9, 11, 11, 10, 10, 10, 9, 9, 9, 9, null, null, null, 11, 10, 11, null, 9, 9, 9, 9, 9, null, 9, 10, 10, null, null, null, 10, 9, 9, null, null, null, null, null, null, null, 9, 9, 9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            ],
            [
                'name' => 'Player 2',
                'size' => 16,
                'pixels' => [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 14, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 14, null, null, null, null, null, null, null, null, null, 14, 12, 12, null, null, null, 14, null, null, null, 14, 12, 12, null, null, null, 14, 13, 14, null, null, null, 14, null, null, null, 12, 13, 13, null, null, null, 12, 12, 14, null, 14, 13, 14, 12, 12, null, 12, 12, 12, null, null, null, 14, 13, 14, 14, 14, 13, 13, 13, 13, 12, 12, 13, 13, null, null, null, 12, 12, 14, 14, 13, 14, 14, 13, 13, 13, 12, 12, 12, null, null, null, 14, 13, 14, 14, 13, 14, 13, 12, 13, 13, 12, 13, 13, null, null, null, 12, 12, 14, 14, 13, 14, 13, 12, 13, 13, 12, 12, 12, null, null, null, 14, 13, 14, 14, 14, 13, 12, 12, 13, 13, 12, 13, 13, null, null, null, 12, 12, 14, 12, 14, 14, 13, 13, 13, 12, 12, 12, 12, null, null, null, 14, 13, 14, null, 12, 12, 12, 12, 12, null, 12, 13, 13, null, null, null, 13, 12, 12, null, null, null, null, null, null, null, 12, 12, 12, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            ],
        ];

        foreach ($tiles as $key => $tile) {
            $insert[] = ['id' => $key + 1, ...$tile, 'pixels' => json_encode($tile['pixels'])];
        }

        Tile::insert($insert);
    }
}
