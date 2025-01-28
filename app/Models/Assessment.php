<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assessment extends Model
{
    use HasFactory;
    protected $fillable = [
        'lesson_id',
        'exam_type',
        'direction',
        'file',
    ];

    public function questions(): HasMany
    {
        return $this->hasMany(Quest::class,'lesson_id','id')->where('type','assessment');
    }
    public function answer(): HasMany
    {
        return $this->hasMany(Answer::class,'learning_id','id')->where('type','assessment');
    }
}
