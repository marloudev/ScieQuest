<?php

namespace App\Http\Controllers;

use App\Models\PreExercise;
use App\Models\Quest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

    public function update_pre_exercise(Request $request)
    {
        $validatedData = $request->validate([
            'lesson_id' => 'nullable|string|max:255',
            'type' => 'nullable|max:255',
            'exam_type' => 'nullable',
            'direction' => 'nullable|string',
            'question' => 'nullable|string',  // Validate as an array if multiple questions
            'answer_key' => 'nullable|string|min:8', // Ensure answer_key is a string
        ]);

        $id = $request->id;
        $pre_exercise = PreExercise::where('id', $id)->first();
        if (!$pre_exercise) {
            return response()->json([
                'message' => 'Exercise not found',
                'error' => 'No exercise found with identifier ' . $id,
            ], 404);
        }

        // Check if a new file is uploaded
        $url = $pre_exercise->file; // Keep the old file URL by default
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }

        // Update lesson fields
        $pre_exercise->update([
            'exam_type' => $request->exam_type,
            'direction' => $request->direction,
            'file' => $url, // Update file URL
        ]);

        return response()->json([
            'message' => 'Pre-exercise updated successfully',
        ]);
    }
}
