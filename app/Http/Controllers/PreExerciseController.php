<?php

namespace App\Http\Controllers;

use App\Models\PreExercise;
use App\Models\Quest;
use Illuminate\Http\Request;

class PreExerciseController extends Controller
{
    public function destroy($id)
    {
        $pre_exercise = PreExercise::where('id', $id)->first();
        if ($pre_exercise) {
            $learning = Quest::where([
                ['learning_id', '=', $pre_exercise->id],
                ['type', '=', 'pre-exercise'],
            ])->first();
            if ($learning) {
                $learning->delete();
            }
            $pre_exercise->delete();
        }

        return response()->json([
            'message' => 'Deleted Successfully',
        ], 200);
    }
}
