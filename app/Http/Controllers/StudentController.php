<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $users = User::where('user_type', 3)->paginate(10);
        return response()->json([
            'response' => $users,
        ], 200);
    }
}
