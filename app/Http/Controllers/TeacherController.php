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
        // Find the user or throw a 404 error
        $user = User::findOrFail($id);

        // Validate input data
        $validatedData = $request->validate([
            'user_id' => 'nullable|unique:users,user_id,' . $id, // Allow unique except for the current user's ID
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
        ]);

        // Prepare data for update
        $dataToUpdate = [
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
        ];

        // Only include 'user_id' if it's provided
        if (!empty($validatedData['user_id'])) {
            $dataToUpdate['user_id'] = $validatedData['user_id'];
        }

        // Update user data
        $user->update($dataToUpdate);

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $user,
        ]);
    }


    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
