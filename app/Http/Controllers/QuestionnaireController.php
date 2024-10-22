<?php

namespace App\Http\Controllers;

use App\Models\Questionnaire;
use Illuminate\Http\Request;

class QuestionnaireController extends Controller
{
    public function index()
    {
        $examinations = Questionnaire::paginate(10);
        return response()->json([
            'response' => $examinations,
        ], 200);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'answer_key' => 'required',
            'question' => 'required',
            'a' => 'required',
            'b' => 'required',
            'c' => 'required',
            'd' => 'required',
            'e' => 'nullable',
            'examination_id' => 'required',
            'specification' => 'required',
        ]);


        Questionnaire::create($validatedData);
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {
        Questionnaire::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
