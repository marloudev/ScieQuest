<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class TeacherController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->get('searching', ''); // Get the search query

        // Apply search filter to the Teacher model
        $teachers = Teacher::query()
            ->when($search, function ($query) use ($search) {
                return $query->where('employee_id', 'like', "%{$search}%")
                    ->orWhere('fname', 'like', "%{$search}%")
                    ->orWhere('lname', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere(DB::raw("CONCAT(fname, ' ', lname)"), 'like', "%{$search}%"); // Full name search
            })
            ->paginate(10);

        return response()->json([
            'response' => $teachers,
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
        // Validate the request data
        $validatedData = $request->validate([
            'user_id' => 'required|unique:users,user_id',  // Corrected 'unique' validation for 'user_id'
            'email' => 'required|email|unique:users,email', // Unique validation for email
            'course_id' => 'nullable|max:255',  // Course must be a string with a max length of 255
            'department_id' => 'nullable',  // Department must be a string with a max length of 255
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

        Teacher::create([
            'employee_id' => $validatedData['user_id'],
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
        // Find the user by user_id
        $user = User::where('user_id', $id)->first();
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'error' => 'No user found with user_id ' . $id,
            ], 404);
        }

        $userData = $request->validate([
            'user_id' => 'nullable|unique:users,user_id,' . $user->id, // Ensure user_id is unique except for the current user's ID
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
        ]);

        $user->update(array_filter($userData));

        // Find the teacher by employee_id
        $teacher = Teacher::where('employee_id', $id)->first();
        if (!$teacher) {
            return response()->json([
                'message' => 'Teacher not found',
                'error' => 'No teacher found with employee_id ' . $id,
            ], 404);
        }

        $teacherData = $request->validate([
            'employee_id' => 'nullable|unique:teachers,employee_id,' . $teacher->id, // Ensure employee_id is unique except for the current teacher's ID
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|string|max:255',
        ]);

        $teacher->update(array_filter($teacherData));

        return response()->json([
            'message' => 'User and Teacher updated successfully',
            'user' => $user,
            'teacher' => $teacher,
        ]);
    }




    public function destroy($id)
    {
        // Find and delete the User record if it exists
        $user = User::where('user_id', $id)->first();
        if ($user) {
            $user->delete();
        }

        // Find and delete the Teacher record if it exists
        $teacher = Teacher::where('employee_id', $id)->first();
        if ($teacher) {
            $teacher->delete();
        }

        return response()->json([
            'response' => 'success',
            'message' => 'User and Teacher records deleted successfully.',
        ], 200);
    }
}
