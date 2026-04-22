<?php

use App\Models\Tile;
use App\Models\User;

beforeEach(function () {
    $this->user = User::factory()->create();
});

test('index requires authentication', function () {
    $this->get(route('tiles.index'))->assertRedirect(route('login'));
});

test('index is displayed', function () {
    $this->actingAs($this->user)
        ->get(route('tiles.index'))
        ->assertOk();
});

test('create page is displayed', function () {
    $this->actingAs($this->user)
        ->get(route('tiles.create'))
        ->assertOk();
});

test('tile can be stored', function () {
    $this->actingAs($this->user)
        ->post(route('tiles.store'), [
            'name' => 'Brick',
            'size' => 8,
            'pixels' => array_fill(0, 64, 1),
        ])
        ->assertRedirect(route('tiles.index'));

    $this->assertDatabaseHas('tiles', ['name' => 'Brick', 'size' => 8]);
});

test('edit page is displayed', function () {
    $tile = Tile::factory()->create();

    $this->actingAs($this->user)
        ->get(route('tiles.edit', $tile))
        ->assertOk();
});

test('tile can be updated', function () {
    $tile = Tile::factory()->create();

    $this->actingAs($this->user)
        ->put(route('tiles.update', $tile), [
            'name' => 'Updated',
            'size' => $tile->size,
            'pixels' => $tile->pixels,
        ])
        ->assertRedirect(route('tiles.index'));

    $this->assertDatabaseHas('tiles', ['id' => $tile->id, 'name' => 'Updated']);
});

test('tile can be deleted', function () {
    $tile = Tile::factory()->create();

    $this->actingAs($this->user)
        ->delete(route('tiles.destroy', $tile))
        ->assertRedirect(route('tiles.index'));

    $this->assertDatabaseMissing('tiles', ['id' => $tile->id]);
});
