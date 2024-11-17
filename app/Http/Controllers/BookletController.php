<?php

namespace App\Http\Controllers;

use App\Models\Booklet;
use Illuminate\Http\Request;

class BookletController extends Controller
{
    public function index()
    {
        $booklet = Booklet::get();
        return response()->json([
            'response' => $booklet,
        ], 200);
    }


    public function show($id)
    {
        $booklet = Booklet::where('id', $id)->with(['examinations'])
        ->orderBy('created_at', 'asc')->first();
        return response()->json([
            'response' =>$booklet,
        ], 200);
    }
    public function store(Request $request)
    {
        Booklet::create($request->all());
        return response()->json([
            'response' =>'success',
        ], 200);
    }

    public function destroy($id)
    {
        Booklet::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }

}
