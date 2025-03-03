<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
use App\Models\Quest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AssessmentController extends Controller
{
    public function destroy($id)
    {
        $assessment = Assessment::where('id', $id)->first();
        if ($assessment) {
            $learning = Quest::where([
                ['learning_id', '=', $assessment->id],
                ['type', '=', 'assessment'],
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

    public function update_assessment(Request $request)
    {

        $id = $request->id;
        $assessment = Assessment::where('id', $id)->first();
        if (!$assessment) {
            return response()->json([
                'message' => 'Assessment not found',
                'error' => 'No assessment found with identifier ' . $id,
            ], 404);
        }

        // Check if a new file is uploaded
        $url = $assessment->file; // Keep the old file URL by default
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }

        // Update lesson fields
        $assessment->update([
            'exam_type' => $request->exam_type,
            'direction' => $request->direction,
            'file' => $url, // Update file URL
        ]);

        return response()->json([
            'message' => 'Assessment updated successfully',
        ]);
    }
}
