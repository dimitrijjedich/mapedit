<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MapStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'  => ['required', 'string', 'max:255'],
            'cells' => ['required', 'array', 'size:676'],
        ];
    }
}
