<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatGPTController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\ExaminerController;
use App\Http\Controllers\ExamTypeController;
use App\Http\Controllers\LearningCenterController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\PreExerciseController;
use App\Http\Controllers\QuestController;
use App\Http\Controllers\QuestionnaireController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\ScoreSheetController;
use App\Http\Controllers\SpecificationController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

Route::get('/user', function (Request $request) {
    return Auth::user();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/rate-paragraph', [ChatGPTController::class, 'rateParagraph']);


Route::post('/auth/login', [AccountController::class, 'login']);
Route::resource('account', AccountController::class);
Route::resource('students', StudentController::class);
Route::get('/get_student_score/{id}', [StudentController::class, 'get_student_score']);
Route::get('/get_student_score_by_pupil_id/{id}/{student_id}', [StudentController::class, 'get_student_score_by_pupil_id']);


Route::resource('teachers', TeacherController::class);
Route::resource('score_sheets', ScoreSheetController::class);
Route::resource('dashboard', DashboardController::class);
Route::resource('answers', AnswerController::class);
Route::resource('module', ModuleController::class);
Route::resource('lesson', LessonController::class);
Route::post('/update_lesson', [LessonController::class, 'update_lesson']);

Route::resource('quest', QuestController::class);
Route::resource('assessment', AssessmentController::class);
Route::resource('pre_exercise', PreExerciseController::class);



Route::resource('answer', AnswerController::class);
Route::get('/booklet/quarter/{id}', [ModuleController::class, 'get_module_by_quarter']);
Route::get('/get_score/{id}/{type}', [AnswerController::class, 'get_score']);
