<?php

use App\Http\Controllers\TileController;
use App\Http\Requests\TileStoreRequest;
use App\Http\Requests\TileUpdateRequest;

test('store uses TileStoreRequest', function () {
    $method = new ReflectionMethod(TileController::class, 'store');
    $type = $method->getParameters()[0]->getType()->getName();

    expect($type)->toBe(TileStoreRequest::class);
});

test('update uses TileUpdateRequest', function () {
    $method = new ReflectionMethod(TileController::class, 'update');
    $type = $method->getParameters()[0]->getType()->getName();

    expect($type)->toBe(TileUpdateRequest::class);
});
