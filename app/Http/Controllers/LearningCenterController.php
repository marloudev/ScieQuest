<?php

namespace App\Http\Controllers;

use App\Models\LearningCenter;
use Illuminate\Http\Request;

class LearningCenterController extends Controller
{
    public function index()
    {
        $learningCenter = LearningCenter::get();
        return response()->json([
            'response' => $learningCenter,
        ], 200);
    }


    public function show($id)
    {
        $learningCenter = LearningCenter::where('examination_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$learningCenter,
        ], 200);
    }
    public function store(Request $request)
    {
        LearningCenter::create($request->all());
        return response()->json([
            'response' =>'success',
        ], 200);
    }

    public function destroy($id)
    {
        LearningCenter::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
