<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Quest extends Model
{
    use HasFactory;
    protected $fillable = [
        'learning_id',
        'lesson_id',
        'type',
        'exam_type',
        'direction',
        'question',
        'answer_key',
        'file',
    ];

    public function pre_exercise(): HasOne
    {
        return $this->hasOne(PreExercise::class, 'lesson_id', 'lesson_id');
    }
}
