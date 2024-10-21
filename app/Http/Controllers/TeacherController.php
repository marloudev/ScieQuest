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
            // 'user_id' => 'required|unique:users,user_id',
            // // 'email' => 'required|email|unique:users,email',
            // 'course_id' => 'max:255',
            // 'address' => 'required|string|max:255',
            // 'department' => 'required|string|max:255',
            // 'dob' => 'required|date',
            // 'fname' => 'required|string|max:255',
            // 'lname' => 'required|string|max:255',
            // 'password' => 'nullable|string|min:8', // Password is nullable
        ]);

        $user = User::findOrFail($id);
        // Prepare data for update
        $dataToUpdate = [
            // 'user_id' => $validatedData['user_id'],
            // // 'email' => $validatedData['email'],
            // 'course_id' => $validatedData['course_id'] ?? null,
            // 'address' => $validatedData['address'],
            // 'department' => $validatedData['department'],
            // 'dob' => $validatedData['dob'],
            // 'fname' => $validatedData['fname'],
            // 'lname' => $validatedData['lname'],
        ];
        if ($request->filled('password')) {
            $dataToUpdate['password'] = Hash::make($validatedData['password']);
        }
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
