<?php

namespace App\Http\Controllers;

use App\Models\Questionnaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuestionnaireController extends Controller
{
    public function index()
    {
        $examinations = Questionnaire::paginate(10);
        return response()->json([
            'response' => $examinations,
        ], 200);
    }

    public function show($id)
    {
        $questionnaire = Questionnaire::where('examination_id', $id)
        ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' =>$questionnaire,
        ], 200);
    }
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'answer_key' => 'required',
            'question' => 'required',
            'a' => 'nullable',
            'b' => 'nullable',
            'c' => 'nullable',
            'd' => 'nullable',
            'e' => 'nullable',
            'examination_id' => 'nullable',
            'specification' => 'nullable',
        ]);
    
        // Handle image uploads
        $imageHeader = $request->hasFile('image_header')
            ? $request->file('image_header')->store('als/images', 's3')
            : null;
        $imageA = $request->hasFile('image_a')
            ? $request->file('image_a')->store('als/images', 's3')
            : null;
        $imageB = $request->hasFile('image_b')
            ? $request->file('image_b')->store('als/images', 's3')
            : null;
        $imageC = $request->hasFile('image_c')
            ? $request->file('image_c')->store('als/images', 's3')
            : null;
        $imageD = $request->hasFile('image_d')
            ? $request->file('image_d')->store('als/images', 's3')
            : null;
        $imageE = $request->hasFile('image_e')
            ? $request->file('image_e')->store('als/images', 's3')
            : null;
    
        // Generate URLs for the uploaded images
        $url1 = $imageHeader ? Storage::disk('s3')->url($imageHeader) : null;
        $url2 = $imageA ? Storage::disk('s3')->url($imageA) : null;
        $url3 = $imageB ? Storage::disk('s3')->url($imageB) : null;
        $url4 = $imageC ? Storage::disk('s3')->url($imageC) : null;
        $url5 = $imageD ? Storage::disk('s3')->url($imageD) : null;
        $url6 = $imageE ? Storage::disk('s3')->url($imageE) : null;
    
        // Merge validated data with the image URLs
        $data = array_merge($validatedData, [
            'image_header' => $url1,
            'image_a' => $url2,
            'image_b' => $url3,
            'image_c' => $url4,
            'image_d' => $url5,
            'image_e' => $url6,
        ]);
    
        // Create the Questionnaire record
        Questionnaire::create($data);
    
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
