<?php

namespace App\Http\Controllers;

use App\Models\ExamType;
use App\Models\FillInTheBlank;
use App\Models\Identification;
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
            'type1' => $request->pre_exercise['type1'],
            'direction1' => $request->pre_exercise['direction1'],
            'type2' => $request->assessment['type2'],
            'direction2' => $request->assessment['direction2'],
            'subject_matter' => $request->subject_matter,
            'discussions' => $request->discussions,
            'link' => $request->link,
        ]);
        $values1 =  $request->pre_exercise['values'];
        if ($request->pre_exercise['type1'] == 'Fill In The Blank') {
            foreach ($values1 as $key => $value) {
                FillInTheBlank::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
            //   ExamType::create($request->all());
        } else if ($request->pre_exercise['type1'] == 'Multiple Choice') {
            foreach ($values1 as $key => $value) {
                MultipleChoice::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->pre_exercise['type1'] == 'Matching') {
            foreach ($request->pre_exercise['matches'] as $key => $value) {
                Matching::create([
                    'exam_types_id' => $exam_type->id,
                    'column_a' => $value['column_a'],
                    'column_b' => $value['column_b'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->pre_exercise['type1'] == 'Identification') {
            foreach ($values1 as $key => $value) {
                Identification::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->pre_exercise['type1'] == 'True Or False') {
            foreach ($values1 as $key => $value) {
                TrueOrFalse::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        }
        $values2 =  $request->assessment['values'];
        if ($request->assessment['type2'] == 'Fill In The Blank') {
            foreach ($values2 as $key => $value) {
                FillInTheBlank::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
            //   ExamType::create($request->all());
        } else if ($request->assessment['type2'] == 'Multiple Choice') {
            foreach ($values2 as $key => $value) {
                MultipleChoice::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->assessment['type2'] == 'Matching') {
            foreach ($request->assessment['matches'] as $key => $value) {
                Matching::create([
                    'exam_types_id' => $exam_type->id,
                    'column_a' => $value['column_a'],
                    'column_b' => $value['column_b'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->assessment['type2'] == 'Identification') {
            foreach ($values2 as $key => $value) {
                Identification::create([
                    'exam_types_id' => $exam_type->id,
                    'question' => $value['question'],
                    'answer_key' => $value['answer_key'],
                ]);
            }
        } else if ($request->assessment['type2'] == 'True Or False') {
            foreach ($values2 as $key => $value) {
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

    public function show($id)
    {
        $exam_type = ExamType::where('module_id', $id)->with(['fill_in_the_blank', 'true_or_false', 'multiple_choice', 'matching', 'identification'])->get();
        return response()->json([
            'status' => 'success',
            'data' => $exam_type,
        ], 200);
    }
}
