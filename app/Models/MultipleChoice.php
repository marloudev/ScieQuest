<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MultipleChoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'exam_types_id',
        'direction',
        'question',
        'answer',
        'answer_key',
        'points',
    ];
}
