<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Module;
use App\Models\Quest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ModuleController extends Controller
{
    public function get_module_by_quarter(Request $request, $id)
    {
        $modules = Module::where('quarter', $id)
            ->with(['lessons.assessments']) // Eager-load assessments as well
            ->get();

        foreach ($modules as $module) {
            foreach ($module->lessons as $lesson) {
                $lesson->assessment_status = '';
                $lesson->total_assessments_score = 0; // Initialize total score
                $lesson->assessment_count = 0;

                foreach ($lesson->assessments as $assessment) {
                    $scoreSum = Answer::where([
                        ['student_id', '=', $request->user_id],
                        ['type', '=', 'assessment'],
                        ['learning_id', '=', $assessment->id],
                    ]);

                    $quest = Quest::where([
                        ['type', '=', 'assessment'],
                        ['learning_id', '=', $assessment->id],
                    ]);


                    $lesson->assessment_count += $quest->count();
                    $assessment->assessment_score = $scoreSum->sum('score');
                    $lesson->total_assessments_score += $scoreSum->sum('score'); // Correct total score calculation
                    $assessment->answers = $scoreSum->get();
                }

                $percentage = ($lesson->assessment_count > 0)
                    ? ($lesson->total_assessments_score / $lesson->assessment_count) * 100
                    : 0;

                $lesson->assessment_average = intval($percentage) . '%';

                $lesson->assessment_status = intval($percentage) >= 75 ? 'Passed' : 'Failed';
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => $modules,
        ], 200);
    }


    public function index()
    {
        $modules = Module::get();
        return response()->json([
            'status' => 'success',
            'message' => 'User is logged in successfully.',
            'data' => $modules,
        ], 200);
    }


    public function show($id)
    {
        $module = Module::where('id', $id)->with(['lessons'])->first();
        return response()->json([
            'status' => 'success',
            'data' => $module,
        ], 200);
    }


    public function destroy($id)
    {
        Module::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function store(Request $request)
    {
        Module::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $module = Module::where('id', $id)->first();
        if (!$module) {
            return response()->json([
                'message' => 'Module not found',
                'error' => 'No module found with id ' . $id,
            ], 404);
        }

        // $moduleData = $request->validate([
        //     'id' => 'nullable|unique:module,id,' . $module->id,
        //     'quarter' => 'nullable|string|max:255',
        //     'title' => 'nullable|string|max:255',
        //     'grade' => 'nullable|string|max:255',
        //     'introductory' => 'nullable|string',
        //     'wintn' => 'nullable|string',
        // ]);


        $module->update($request->all());

        return response()->json([
            'message' => 'Module updated successfully',
            'module' => $module,
        ]);
    }
}
