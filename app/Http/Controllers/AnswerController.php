<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Quest;
use App\Models\ScoreSheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnswerController extends Controller
{

    public function get_score($id)
    {
        $score = Answer::where('learning_id', $id)->sum('score'); // Specify the column to sum
    
        return response()->json([
            'status' => 'success',
            'data' => $score,
        ], 200);
    }
    
    public function index()
    {
        $answers = Answer::get();
        return response()->json([
            'response' => $answers,
        ], 200);
    }

    public function show($id)
    {

        $answers = Answer::where('examination_id', $id)
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $answers,
        ], 200);
    }

    public function store(Request $request)
    {


        $quest = Quest::where('id', $request->quest_id)->first();
        $answer = Answer::where('quest_id', '=', $request->quest_id)->first();



        if (!$answer) {
            Answer::create([
                'learning_id' => $quest->learning_id,
                'type' => $quest->type,
                'quest_id' => $request->quest_id,
                'student_id' => $request->student_id,
                'answer' => $request->answer,
                'score' => ucfirst($quest->answer_key) == ucfirst($request->answer) ? 1 : 0,
            ]);
        }
        $isFinish = false;
        $count_answer = Answer::where([
            ['learning_id', '=', $quest->learning_id],
            ['type', '=', $quest->type]
        ])->count();
        $count_quest = Quest::where([
            ['learning_id', '=', $quest->learning_id],
            ['type', '=', $quest->type]
        ])->count();

        if ($count_answer == $count_quest) {
            $isFinish = true;
        }

        return response()->json([
            'count_answer' => $count_answer,
            'count_quest' => $count_quest,
            'isFinish' => $isFinish,
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {

        Answer::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
