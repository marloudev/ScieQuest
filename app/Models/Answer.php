<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = [
        'learning_id',
        'quest_id',
        'student_id',
        'type',
        'answer',
        'score',
    ];

    public function questionnaire(): HasOne
    {
        return $this->hasOne(Questionnaire::class,'id','questionnaire_id');
    }
}
