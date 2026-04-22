<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TileFactory extends Factory
{
    public function definition(): array
    {
        $size = $this->faker->randomElement([8, 16]);

        return [
            'name' => $this->faker->word(),
            'size' => $size,
            'pixels' => array_fill(0, $size * $size, 1),
        ];
    }
}
