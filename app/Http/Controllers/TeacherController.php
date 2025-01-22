<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    public function index()
    {
        $users = User::where('user_type', 2)->paginate(10);
        return response()->json([
            'response' => $users,
        ], 200);
    }

    public function show($id)
    {
        User::where('id', $id)->get();
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function store(Request $request)
    {
        User::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function update(Request $request, $id)
    {

        $validatedData = $request->validate([
            'id' => 'required|unique:users,id',
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
        ]);

        $user = User::findOrFail($id);
        // Prepare data for update
        $dataToUpdate = [
            'id' => $validatedData['id'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
        ];
        $user->update($dataToUpdate);
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
