<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
}
