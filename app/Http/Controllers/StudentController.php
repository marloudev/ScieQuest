<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search'); // Get search input
        $query = User::where('user_type', 3); // Filter by user_type

        // Check if there's a search query, and if so, apply search across columns
        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('email', 'LIKE', "%{$search}%");
                // ->orWhere('phone', 'LIKE', "%{$search}%")
            });
        }

        $users = $query->paginate(10);

        return response()->json([
            'response' => $users,
        ], 200);
    }


    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'user_id' => 'required|unique:users,user_id',  // Corrected 'unique' validation for 'user_id'
            'email' => 'required|email|unique:users,email', // Unique validation for email
            'fname' => 'required|string|max:255',  // First name must be a string with a max length of 255
            'lname' => 'required|string|max:255',  // Last name must be a string with a max length of 255
            'password' => 'required|string|min:8',  // Password must be a string with a minimum length of 8
        ]);

        // Create the user
        User::create([
            'user_id' => $validatedData['user_id'],
            'email' => $validatedData['email'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'user_type' => $request->user_type,
            'password' => Hash::make($validatedData['password']),
        ]);

        Student::create([
            'id_user' => $validatedData['id'],
            'teacher_id' => $validatedData['employee_id'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'email' => $validatedData['email'],
        ]);

        // Return response
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully!',
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
}
