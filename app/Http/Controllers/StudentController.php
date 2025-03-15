<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Module;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            'student_id' => 'required|unique:users,user_id',  // Ensure student_id is an integer
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
            'student_id' => $request->student_id,
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
        $student = Student::where('teacher_id', $id)->with(['teacher', 'user'])->paginate();
        return response()->json([
            'status' => $student,
        ], 200);
    }



    public function get_student_score($id)
    {
        $auth = Auth::user();
        $students = Student::where('teacher_id', $auth->user_id)->with(['user'])->get();
        $module = Module::where('id', $id)->with(['lessons'])->first();


        foreach ($module['lessons'] as $lessonKey => $lesson) {
            foreach ($lesson['pre_exercises'] as $exerciseKey => $pre_exercise) {
                // Initialize an array to store the scores for each student
                $studentScores = [];

                foreach ($students as $studentKey => $student) {
                    if ($student['user']['id']) {
                        // Get the sum of scores for the student
                        $scoreSum = Answer::where([
                            ['student_id', '=', $student['user']['id']],
                            ['type', '=', 'pre-exercise'],
                            ['learning_id', '=', $pre_exercise['id']],
                        ])->get();

                        $studentScores[] = [
                            'score' => $scoreSum->sum('score'),
                            'user' => $student['user'],
                            'answer' => $scoreSum,
                        ];
                    }
                }

                // Store the scores for each exercise in the module
                $module['lessons'][$lessonKey]['pre_exercises'][$exerciseKey]['scores'] = $studentScores;
            }

            foreach ($lesson['assessments'] as $exerciseKey => $assessment) {
                // Initialize an array to store the scores for each student
                $studentScores = [];

                foreach ($students as $studentKey => $student) {
                    if ($student['user']['id']) {
                        // Get the sum of scores for the student
                        $scoreSum = Answer::where([
                            ['student_id', '=', $student['user']['id']],
                            ['type', '=', 'assessment'],
                            ['learning_id', '=', $assessment['id']],
                        ])->get();

                        $studentScores[] = [
                            'score' => $scoreSum->sum('score'),
                            'user' => $student['user'],
                            'answer' => $scoreSum,
                        ];
                    }
                }

                // Store the scores for each exercise in the module
                $module['lessons'][$lessonKey]['assessments'][$exerciseKey]['scores'] = $studentScores;
            }
        }



        return response()->json([
            // 'module' => $module,
            'status' => $module,
        ], 200);
    }


    public function get_student_score_by_pupil_id(Request $request, $id, $student_id)
    {
        $auth = Auth::user();
        // Retrieve the specific student based on teacher ID and pupil ID
        $student = Student::where('teacher_id', $auth->user_id)
            ->where('student_id', $student_id)
            ->with(['user'])
            ->first();

        if (!$student) {
            return response()->json([
                'status' => 'error',
                'message' => 'Student not found.',
            ], 404);
        }

        // Retrieve the module by ID
        $module = Module::where([
            ['quarter','=', $request->quarter],
            ['title','=', $request->module],
        ])
            ->with(['lessons'])
            ->first();

        if (!$module) {
            return response()->json([
                'status' => 'error',
                'message' => 'Module not found.',
            ], 404);
        }

        foreach ($module['lessons'] as $lessonKey => $lesson) {
            // Process pre-exercises
            foreach ($lesson['pre_exercises'] as $exerciseKey => $pre_exercise) {
                // Get the sum of scores for the specific student
                $scoreSum = Answer::where([
                    ['student_id', '=', $student['user']['id']],
                    ['type', '=', 'pre-exercise'],
                    ['learning_id', '=', $pre_exercise['id']],
                ])->with(['quest'])->get();

                // Store the score for the specific student in the pre-exercise
                $module['lessons'][$lessonKey]['pre_exercises'][$exerciseKey]['scores'] = [
                    'score' => $scoreSum->sum('score'),
                    'user' => $student['user'],
                    'answers' => $scoreSum,
                ];
            }

            // Process assessments
            foreach ($lesson['assessments'] as $exerciseKey => $assessment) {
                // Get the sum of scores for the specific student
                $scoreSum = Answer::where([
                    ['student_id', '=', $student['user']['id']],
                    ['type', '=', 'assessment'],
                    ['learning_id', '=', $assessment['id']],
                ])->with(['quest'])->get();

                // Store the score for the specific student in the assessment
                $module['lessons'][$lessonKey]['assessments'][$exerciseKey]['scores'] = [
                    'score' => $scoreSum->sum('score'),
                    'user' => $student['user'],
                    'answers' => $scoreSum,
                ];
            }
        }

        return response()->json([
            'status' => $module,
        ], 200);
    }
}
