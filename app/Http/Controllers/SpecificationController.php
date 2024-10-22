<?php

namespace App\Http\Controllers;

use App\Models\Specification;
use Illuminate\Http\Request;

class SpecificationController extends Controller
{
    public function index()
    {
        $specification = Specification::get();
        return response()->json([
            'response' => $specification,
        ], 200);
    }

    public function show($id)
    {
        $specification = Specification::where('examination_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$specification,
        ], 200);
    }
    public function store(Request $request)
    {
        Specification::create($request->all());
        return response()->json([
            'response' =>'success',
        ], 200);
    }

}
