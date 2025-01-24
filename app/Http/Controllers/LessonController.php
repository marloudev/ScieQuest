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
    public function show($id){
        
    }
}
