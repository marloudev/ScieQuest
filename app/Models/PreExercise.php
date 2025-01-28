<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PreExercise extends Model
{
    use HasFactory;
    protected $fillable = [
        'lesson_id',
        'exam_type',
        'direction',
        'file',
    ];

    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class,'module_id','id')->with(['pre_exercises','assessments']);
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Quest::class,'lesson_id','id')->where('type','pre-exercise');
    }
    public function answer(): HasMany
    {
        return $this->hasMany(Answer::class,'learning_id','lesson_id')->where('type','pre-exercise');
    }
    
}
