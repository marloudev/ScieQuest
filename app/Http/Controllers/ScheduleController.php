<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{

    public function index()
    {
        $users = Schedule::with(['user','learning_center'])->paginate(10);
        return response()->json([
            'response' => $users,
        ], 200);
    }

    public function show($id)
    {

        $schedule = Schedule::where('teacher_id','=',$id)->with(['user','learning_center'])
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $schedule,
        ], 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'unique_id' => 'required',
            'teacher_id' => 'required',
            'booklet_id' => 'required',
            'learning_center' => 'required',
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
