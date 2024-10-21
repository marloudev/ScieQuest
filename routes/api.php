<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatGPTController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\QuestionnaireController;
use App\Http\Controllers\ScoreSheetController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/rate-paragraph', [ChatGPTController::class, 'rateParagraph']);



Route::resource('account', AccountController::class);
Route::resource('students', StudentController::class);
Route::resource('teachers', TeacherController::class);
Route::resource('examinations', ExaminationController::class);
Route::resource('questionnaires', QuestionnaireController::class);
Route::resource('score_sheets', ScoreSheetController::class);
Route::resource('dashboard', DashboardController::class);

