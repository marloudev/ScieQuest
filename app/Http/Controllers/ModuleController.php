<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function get_module_by_quarter($id)
    {
        $modules = Module::where('quarter', $id)->with(['lessons'])->get();
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

        $moduleData = $request->validate([
            'id' => 'nullable|unique:module,id,' . $module->id,
            'quarter' => 'nullable|string|max:255',
            'title' => 'nullable|string|max:255',
            'grade' => 'nullable|string|max:255',
            'introductory' => 'nullable|string',
            'wintn' => 'nullable|string',
        ]);


        $module->update(array_filter($moduleData));

        return response()->json([
            'message' => 'Module updated successfully',
            'module' => $module,
        ]);
    }
}
