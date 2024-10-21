<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class Teacher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        // Assuming user_type '2' represents a teacher
        if ($user->user_type == '1') {
            return Inertia::location(route('admin.dashboard')); // Redirect to admin dashboard
        } else if ($user->user_type == '3') {
            return Inertia::location(route('student.dashboard')); // Redirect to student dashboard
        }

        // If none of the roles match, proceed with the next middleware or request
        return $next($request);
    }
}
