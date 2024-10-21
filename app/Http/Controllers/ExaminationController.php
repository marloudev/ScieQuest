<?php

namespace App\Http\Controllers;

use App\Models\Examination;
use Illuminate\Http\Request;

class ExaminationController extends Controller
{
    public function index()
    {
        $examinations = Examination::paginate(10);
        return response()->json([
            'response' => $examinations,
        ], 200);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'instruction' => 'required',
            'sub_title' => 'required',
            'title' => 'required',
        ]);

        Examination::create($validatedData);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
