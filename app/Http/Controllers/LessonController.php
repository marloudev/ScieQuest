<?php

namespace App\Http\Controllers;

use App\Models\Assessment;
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

    public function update_lesson(Request $request)
    {
        $id = $request->id;
        $lesson = Lesson::where('id', $id)->first();
        if (!$lesson) {
            return response()->json([
                'message' => 'Lesson not found',
                'error' => 'No lesson found with identifier ' . $id,
            ], 404);
        }

        // Check if a new file is uploaded
        $url = $lesson->file; // Keep the old file URL by default
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('personal-' . date("Y"), 's3');
            $url = Storage::disk('s3')->url($path);
        }

        // Update lesson fields
        $lesson->update([
            'link' => $request->link,
            'subject_matter' => $request->subject_matter,
            'discussion' => $request->discussion,
            'file' => $url, // Update file URL
        ]);

        return response()->json([
            'message' => 'Lesson updated successfully',
            'lesson' => $lesson,
        ]);
    }

    public function index()
    {
        $lessons = Lesson::with(['pre-exercise', 'assessment'])->get();
        return response()->json([
            'status' => 'success',
            'data' => $lessons,
        ], 200);
    }


    public function destroy($id)
    {
        Lesson::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
