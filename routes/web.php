<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('login/page');
})->name('login');

Route::middleware('redirectBasedOnRole')->get('/register', function () {
    return Inertia::render('register/page');
})->name('register');




Route::middleware('auth:sanctum', 'administrator', 'verified')->prefix('administrator')->group(function () {

    Route::get('/', function () {
        return redirect()->route('admin.dashboard');
    })->name('dashboard');

    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    })->name('admin.dashboard');

    Route::prefix('teachers')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/teachers/page');
        });
        Route::prefix('{user_id}')->group(function () {
            Route::get('/', function () {
                return Inertia::render('admin/teachers/id/page1');
            });

            Route::get('/create_grades', function () {
                return Inertia::render('admin/teachers/id/page2');
            });

            Route::get('/students', function () {
                return Inertia::render('admin/teachers/id/page3');
            });
        });
    });
    Route::prefix('students')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/students/page');
        });
        Route::get('/registered', function () {
            return Inertia::render('admin/students/page');
        });
        Route::get('/enrollment', function () {
            return Inertia::render('admin/enrollment/page');
        });
        Route::get('/enrollment/{enrollment_id}', function () {
            return Inertia::render('admin/enrollment/id/page');
        });
    });

    Route::prefix('literacy_test')->group(function () {
        Route::get('/elementary', function () {
            return Inertia::render('admin/literacy_test/elementary/page');
        });
        Route::get('/elementary/{id}', function () {
            return Inertia::render('admin/literacy_test/elementary/id/page');
        });
        Route::get('/junior_high', function () {
            return Inertia::render('admin/literacy_test/junior_high/page');
        });
    });

    Route::get('/settings', function () {
        return Inertia::render('admin/settings/page');
    });

});

Route::middleware('auth:sanctum', 'teacher', 'verified')->prefix('teacher')->group(function () {

    Route::get('/', function () {
        return redirect()->route('teacher.dashboard');
    })->name('dashboard');

    Route::get('/dashboard', function () {
        return Inertia::render('teacher/dashboard/page');
    })->name('teacher.dashboard');

    Route::prefix('subjects')->group(function () {
        Route::get('/', function () {
            return Inertia::render('teacher/subjects/page');
        });
        Route::prefix('{user_id}')->group(function () {
            Route::get('/', function () {
                return Inertia::render('teacher/subjects/id/page1');
            });

            Route::get('/create_grades', function () {
                return Inertia::render('teacher/subjects/id/page2');
            });

            Route::get('/students', function () {
                return Inertia::render('teacher/subjects/id/page3');
            });
        });
    });
    // Route::get('/subjects', function () {
    //     return Inertia::render('teacher/subjects/page');
    // })->name('teacher.subjects');

    // Route::get('/subjects/{code}', function () {
    //     return Inertia::render('teacher/subjects/id/page');
    // })->name('teacher.subject.code');

    Route::get('/settings', function () {
        return Inertia::render('teacher/settings/page');
    })->name('teacher.settings');
});

Route::middleware('auth:sanctum', 'student', 'verified')->prefix('student')->group(function () {
    Route::get('/', function () {
        return redirect()->route('student.dashboard');
    })->name('dashboard');

    Route::get('/dashboard', function () {
        return Inertia::render('student/dashboard/page');
    })->name('student.dashboard');

    Route::get('/subjects', function () {
        return Inertia::render('student/subjects/page');
    })->name('student.subject');


    Route::get('/settings', function () {
        return Inertia::render('student/settings/page');
    })->name('student.settings');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
