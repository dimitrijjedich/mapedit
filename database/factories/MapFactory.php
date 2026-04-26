<?php

namespace Database\Factories;

use App\Models\Map;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Map> */
class MapFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'  => $this->faker->words(2, true),
            'cells' => array_fill(0, 676, null),
        ];
    }
}
