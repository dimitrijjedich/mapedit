<?php

use App\Http\Requests\TileStoreRequest;
use App\Http\Requests\TileUpdateRequest;
use Illuminate\Support\Facades\Validator;

$valid = ['name' => 'Brick', 'size' => 8, 'pixels' => array_fill(0, 64, 1)];

dataset('tile requests', [
    'store'  => [TileStoreRequest::class],
    'update' => [TileUpdateRequest::class],
]);

test('passes with valid data', function (string $requestClass) use ($valid) {
    $rules = (new $requestClass)->rules();
    $validator = Validator::make($valid, $rules);

    expect($validator->passes())->toBeTrue();
})->with('tile requests');

test('requires name', function (string $requestClass) use ($valid) {
    $rules = (new $requestClass)->rules();
    $validator = Validator::make([...$valid, 'name' => ''], $rules);

    expect($validator->errors()->has('name'))->toBeTrue();
})->with('tile requests');

test('rejects invalid size', function (string $requestClass) use ($valid) {
    $rules = (new $requestClass)->rules();
    $validator = Validator::make([...$valid, 'size' => 32], $rules);

    expect($validator->errors()->has('size'))->toBeTrue();
})->with('tile requests');

test('requires pixels', function (string $requestClass) use ($valid) {
    $rules = (new $requestClass)->rules();
    $validator = Validator::make([...$valid, 'pixels' => null], $rules);

    expect($validator->errors()->has('pixels'))->toBeTrue();
})->with('tile requests');
