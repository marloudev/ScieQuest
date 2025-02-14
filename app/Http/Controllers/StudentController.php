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
        $teacherId = $request->input('teacher_id'); // Get teacher_id from the request
        $query = Student::query()->with(['teacher']);

        // Check if there's a search query, and if so, apply search across columns
        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('email', 'LIKE', "%{$search}%");
                // ->orWhere('phone', 'LIKE', "%{$search}%")
            });
        }

        // Check if there's a teacher filter, and apply it to the query
        if (!empty($teacherId)) {
            $query->where('teacher_id', $teacherId); // Assuming 'teacher_id' is the foreign key in the students table
        }

        $students = $query->paginate(10);

        return response()->json([
            'response' => $students,
        ], 200);
    }


    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'email' => 'required|email|unique:users,email', // Unique validation for email
            'fname' => 'required|string|max:255',  // First name must be a string with a max length of 255
            'lname' => 'required|string|max:255',  // Last name must be a string with a max length of 255
            'password' => 'required|string|min:8',  // Password must be a string with a minimum length of 8
            'student_id' => 'required|integer',  // Ensure student_id is an integer
            'teacher' => 'required',
        ]);

        // Create the user
        User::create([
            'user_id' => $validatedData['student_id'],  // This should be fixed based on your business logic
            'email' => $validatedData['email'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'user_type' => $request->user_type,
            'password' => Hash::make($validatedData['password']),
        ]);

        // Create the student record
        Student::create([
            'student_id' => $validatedData['student_id'],
            'teacher_id' => $validatedData['teacher'],  // Make sure 'employee_id' exists in the request
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
            'user_id' => 'nullable|unique:users,user_id,' . $user->id, // Exclude current user's ID from unique check
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
        ]);

        $user->update(array_filter($userData));

        // Find the student by student_id
        $student = Student::where('student_id', $id)->first();
        if (!$student) {
            return response()->json([
                'message' => 'Student not found',
                'error' => 'No student found with student_id ' . $id,
            ], 404);
        }

        $studentData = $request->validate([
            'student_id' => 'nullable|unique:students,student_id,' . $student->id, // Exclude current student's ID from unique check
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'teacher_id' => 'required|integer|exists:teachers,employee_id',
        ]);

        // Update the student data including teacher_id
        $student->update(array_filter($studentData));

        return response()->json([
            'message' => 'User and Student updated successfully',
            'user' => $user,
            'student' => $student,
        ]);
    }


    public function destroy($id)
    {
        // Find and delete the User record if it exists
        $user = User::where('user_id', $id)->first();
        if ($user) {
            $user->delete();
        }

        $student = Student::where('student_id', $id)->first();
        if ($student) {
            $student->delete();
        }

        return response()->json([
            'response' => 'success',
            'message' => 'User and Student records deleted successfully.',
        ], 200);
    }

    public function show($id)
    {
        $student = Student::where('teacher_id', $id)->with(['teacher'])->paginate();
        return response()->json([
            'status' => $student,
        ], 200);
    }
}
