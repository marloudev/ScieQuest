<?php

use App\Http\Controllers\ClassParticipationController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\SubjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('class_participation', ClassParticipationController::class);
Route::resource('course', CourseController::class);
Route::resource('dpartment', DepartmentController::class);
Route::resource('enrollment', EnrollmentController::class);
Route::resource('examination', ExaminationController::class);
Route::resource('grade', GradeController::class);
Route::resource('project', ProjectController::class);
Route::resource('quiz', QuizController::class);
Route::resource('subject', SubjectController::class);