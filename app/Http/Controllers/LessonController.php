<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LessonController extends Controller
{
    public function store(Request $request)
    {
        $lesson = json_decode($request->input('lesson'), true);
        $url = '';
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }
        Lesson::create([
            'module_id' => $request->module_id,
            'link' => $lesson['link'],
            'subject_matter' => $lesson['subject_matter'],
            'discussion' => $lesson['discussion'],
            'file' => $url,
        ]);
        return response()->json([
            'response' => $lesson,
        ], 200);
    }
    public function show($id) {}

    public function update(Request $request, $id)
    {
        // Find the lesson by ID
        $lesson = Lesson::where('id', $id)->first();

        if (!$lesson) {
            return response()->json([
                'message' => 'Lesson not found',
                'error' => 'No lesson found with id ' . $id,
            ], 404);
        }

        // Check if a new file is uploaded
        $url = $lesson->file; // Keep the old file URL by default

        if ($request->hasFile('file')) {
            // If a new file is uploaded, store it on S3 and get the new URL
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }

        // Update the lesson with the new data
        $lesson->update([
            'module_id' => $request->module_id,
            'link' => $request->input('link'),
            'subject_matter' => $request->input('subject_matter'),
            'discussion' => $request->input('discussion'),
            'file' => $url, // Store the file URL
        ]);

        return response()->json([
            'message' => 'Lesson updated successfully',
            'lesson' => $lesson,
        ]);
    }



    public function destroy($id)
    {
        Lesson::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
