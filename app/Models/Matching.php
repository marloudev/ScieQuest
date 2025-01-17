<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matching extends Model
{
    use HasFactory;
    protected $fillable = [
        'exam_types_id',
        'direction',
        'column_a',
        'column_b',
        'answer',
        'answer_key',
        'points',
    ];
}
