<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function get_module_by_quarter($id){
        $modules = Module::where('quarter',$id)->get();
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
            'data' =>$module,
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
