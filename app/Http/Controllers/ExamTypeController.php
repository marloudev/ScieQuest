<?php

namespace App\Http\Controllers;

use App\Models\ExamType;
use App\Models\FillInTheBlank;
use App\Models\Indentification;
use App\Models\Matching;
use App\Models\MultipleChoice;
use App\Models\TrueOrFalse;
use Illuminate\Http\Request;

class ExamTypeController extends Controller
{
    public function store(Request $request)
    {
        $exam_type = ExamType::create([
            'module_id' => $request->module_id,
            'type' => $request->type,
            'direction' => $request->direction,
        ]);
        $values =  $request->values;
        if ($request->type == 'Fill In The Blank') {
            foreach ($values as $key => $value) {
                FillInTheBlank::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
            //   ExamType::create($request->all());
        } else if ($request->type == 'Multiple Choice') {
            foreach ($values as $key => $value) {
                MultipleChoice::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->type == 'Matching') {
            foreach ($request->matches as $key => $value) {
                Matching::create([
                    'exam_types_id' => $exam_type->id,
                    'column_a' => $value['column_a'],
                    'column_b' => $value['column_b'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->type == 'Identification') {
            foreach ($values as $key => $value) {
                Indentification::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->type == 'True Or False') {
            foreach ($values as $key => $value) {
                TrueOrFalse::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Assessment has been created.',
        ], 200);
    }
}
