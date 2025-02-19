<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\Quest;
use Illuminate\Http\Request;

class AssessmentController extends Controller
{
    public function destroy($id)
    {
        $assessment = Assessment::where('id', $id)->first();
        if ($assessment) {
            $learning = Quest::where([
                ['learning_id','=',$assessment->id],
                ['type','=','assessment'],
            ])->first();
            if ($learning) {
                $learning->delete();
            }
            $assessment->delete();
        }
        return response()->json([
            'message' => 'Deleted Successfully',
        ], 200);
    }
}
