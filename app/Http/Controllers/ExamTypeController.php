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
use Illuminate\Support\Facades\Storage;

class ExamTypeController extends Controller
{
    public function store(Request $request)
    {
       
        // Decode JSON fields
        $assessment = json_decode($request->assessment, true); // Decoding JSON into an array
        $preExercise = json_decode($request->pre_exercise, true); // Decoding JSON into an array
    
        // Handle file uploads
        $url1 = $this->uploadFile($request, 'file1');
        $url2 = $this->uploadFile($request, 'file2');
    
        // Create the ExamType record
        $exam_type = ExamType::create([
            'module_id' => $request->module_id,
            'type1' => $preExercise['type1'],
            'direction1' => $preExercise['direction1'],
            'type2' => $assessment['type2'],
            'direction2' => $assessment['direction2'],
            'subject_matter' => $request->subject_matter,
            'discussions' => $request->discussions,
            'link' => $request->link,
            'file1' => $url1 ?? '',
            'file2' => $url2 ?? '',
        ]);
    
        // Process Pre Exercise Questions
        $this->processQuestions($exam_type->id, $preExercise, 'pre_exercise');
    
        // Process Assessment Questions
        $this->processQuestions($exam_type->id, $assessment, 'assessment');
    
        // Return success response
        return response()->json([
            'status' => 'success',
            'message' => 'Assessment has been created.',
        ], 200);
    }
    
    // File Upload Helper
    private function uploadFile(Request $request, $fileKey)
    {
        if ($request->hasFile($fileKey)) {
            $path = $request->file($fileKey)->store('personal-' . date("Y"), 's3');
            return Storage::disk('s3')->url($path);
        }
        return null;
    }
    
    // Process Questions Based on Type
    private function processQuestions($examTypeId, $data, $type = 'pre_exercise')
    {
        $values = $data['values'] ?? [];
        $matches = $data['matches'] ?? [];
    
        // Process questions based on type
        $type1 = $data['type1'] ?? null;
        $type2 = $data['type2'] ?? null;
    
        $questionType = $type === 'pre_exercise' ? $type1 : $type2;
        
        switch ($questionType) {
            case 'Fill In The Blank':
                $this->createFillInTheBlank($examTypeId, $values);
                break;
            case 'Multiple Choice':
                $this->createMultipleChoice($examTypeId, $values);
                break;
            case 'Matching':
                $this->createMatching($examTypeId, $matches);
                break;
            case 'Identification':
                $this->createIdentification($examTypeId, $values);
                break;
            case 'True Or False':
                $this->createTrueOrFalse($examTypeId, $values);
                break;
            default:
                break;
        }
    }
    
    // Helper Methods for Different Question Types
    private function createFillInTheBlank($examTypeId, $values)
    {
        foreach ($values as $value) {
            FillInTheBlank::create([
                'exam_types_id' => $examTypeId,
                'question' => $value['question'],
                'answer_key' => $value['answer_key'],
            ]);
        }
    }
    
    private function createMultipleChoice($examTypeId, $values)
    {
        foreach ($values as $value) {
            MultipleChoice::create([
                'exam_types_id' => $examTypeId,
                'question' => $value['question'],
                'answer_key' => $value['answer_key'],
            ]);
        }
    }
    
    private function createMatching($examTypeId, $matches)
    {
        foreach ($matches as $match) {
            Matching::create([
                'exam_types_id' => $examTypeId,
                'column_a' => $match['column_a'],
                'column_b' => $match['column_b'],
                'answer_key' => $match['answer_key'],
            ]);
        }
    }
    
    private function createIdentification($examTypeId, $values)
    {
        foreach ($values as $value) {
            Identification::create([
                'exam_types_id' => $examTypeId,
                'question' => $value['question'],
                'answer_key' => $value['answer_key'],
            ]);
        }
    }
    
    private function createTrueOrFalse($examTypeId, $values)
    {
        foreach ($values as $value) {
            TrueOrFalse::create([
                'exam_types_id' => $examTypeId,
                'question' => $value['question'],
                'answer_key' => $value['answer_key'],
            ]);
        }
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
