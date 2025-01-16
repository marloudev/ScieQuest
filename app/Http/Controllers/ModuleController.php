<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function index()
    {
        $module = Module::get();
        return response()->json([
            'response' => $module,
        ], 200);
    }


    public function show($id)
    {
        $module = Module::where('id', $id)->with(['examinations'])
        ->orderBy('created_at', 'asc')->first();
        return response()->json([
            'response' =>$module,
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
            'response' =>'success',
        ], 200);
    }
}
