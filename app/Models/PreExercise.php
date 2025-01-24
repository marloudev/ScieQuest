<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreExercise extends Model
{
    use HasFactory;
    protected $fillable = [
        'lesson_id',
        'exam_type',
        'direction',
        'file',
    ];
}
