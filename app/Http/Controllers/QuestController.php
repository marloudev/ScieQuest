<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\PreExercise;
use App\Models\Quest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuestController extends Controller
{
    public function store(Request $request)
    {
        $questions = json_decode($request->input('questions'), true);

        $url = '';
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }
        if ($request->type == 'pre-exercise') {
            $learning_id =  PreExercise::create([
                'lesson_id' => $request->lesson_id,
                'exam_type' => $request->exam_type,
                'direction' => $request->direction,
                'file' => $url ?? null,
            ]);

            foreach ($questions as $key => $value) {
                Quest::create([
                    'learning_id' => $learning_id->id,
                    'lesson_id' => $request->lesson_id,
                    'exam_type' => $request->exam_type,
                    'type' => $request->type,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                    'file' => $url ?? null,
                ]);
            }
        }
        if ($request->type == 'assessment') {
            $learning_id =  Assessment::create([
                'lesson_id' => $request->lesson_id,
                'exam_type' => $request->exam_type,
                'direction' => $request->direction,
                'file' => $url ?? null,
            ]);

            foreach ($questions as $key => $value) {
                Quest::create([
                    'learning_id' => $learning_id->id,
                    'lesson_id' => $request->lesson_id,
                    'exam_type' => $request->exam_type,
                    'type' => $request->type,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                    'file' => $url ?? null,
                ]);
            }
        }
    }
    public function destroy($id)
    {
        $quest = Quest::where('id', $id)->first();
        if ($quest) {
            $quest->delete();
        }
        return response()->json([
            'message' => 'Deleted Successfully',
        ], 200);
    }
}
