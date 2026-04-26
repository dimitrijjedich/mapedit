<?php

namespace App\Http\Controllers;

use App\Http\Requests\MapStoreRequest;
use App\Http\Requests\MapUpdateRequest;
use App\Models\Color;
use App\Models\Map;
use App\Models\Tile;
use Inertia\Inertia;

class MapController extends Controller
{
    public function index()
    {
        return Inertia::render('Maps/Index', [
            'maps' => Map::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Maps/Create', [
            'tiles'  => Tile::where('size', 8)->get(),
            'colors' => Color::all(),
        ]);
    }

    public function store(MapStoreRequest $request)
    {
        Map::create($request->validated());

        return redirect()->route('maps.index');
    }

    public function edit(Map $map)
    {
        return Inertia::render('Maps/Edit', [
            'map'    => $map,
            'tiles'  => Tile::where('size', 8)->get(),
            'colors' => Color::all(),
        ]);
    }

    public function update(MapUpdateRequest $request, Map $map)
    {
        $map->update($request->validated());

        return redirect()->route('maps.index');
    }

    public function destroy(Map $map)
    {
        $map->delete();

        return redirect()->route('maps.index');
    }
}
