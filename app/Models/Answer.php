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

    public function quest(): HasOne
    {
        return $this->hasOne(Quest::class,'id','quest_id');
    }
}
