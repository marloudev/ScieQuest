<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'instruction' => 'required',
            'teacher' => 'required',
            // 'learning_center' => 'required',
            'als_level' => 'required',
            'start_at' => 'required',
            'end_at' => 'required',
        ]);
      
        Schedule::create($validatedData);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
