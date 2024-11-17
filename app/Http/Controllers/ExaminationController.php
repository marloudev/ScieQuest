<?php

namespace App\Http\Controllers;

use App\Models\Examination;
use Illuminate\Http\Request;

class ExaminationController extends Controller
{
    public function index(Request $request)
    {
        $examinations = Examination::where('als_level',$request->als_level)->paginate(10);
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
            'als_level' => 'required',
            'booklet_id' => 'required',
        ]);
      
        Examination::create($validatedData);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function show($id)
    {
        $booklets = Examination::where('booklet_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$booklets,
        ], 200);
    }
}
