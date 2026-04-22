<?php

namespace App\Http\Controllers;

use App\Http\Requests\TileStoreRequest;
use App\Http\Requests\TileUpdateRequest;
use App\Models\Color;
use App\Models\Tile;
use Inertia\Inertia;

class TileController extends Controller
{
    public function index()
    {
        return Inertia::render('Tiles/Index', [
            'tiles' => Tile::all(),
            'colors' => Color::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Tiles/Create', [
            'colors' => Color::all(),
        ]);
    }

    public function store(TileStoreRequest $request)
    {
        Tile::create($request->validated());

        return redirect()->route('tiles.index');
    }

    public function edit(Tile $tile)
    {
        return Inertia::render('Tiles/Edit', [
            'tile' => $tile,
            'colors' => Color::all(),
        ]);
    }

    public function update(TileUpdateRequest $request, Tile $tile)
    {
        $tile->update($request->validated());

        return redirect()->route('tiles.index');
    }

    public function destroy(Tile $tile)
    {
        $tile->delete();

        return redirect()->route('tiles.index');
    }
}
