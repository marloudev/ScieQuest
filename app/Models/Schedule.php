<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $fillable=[
        'unique_id',
        'teacher_id',
        'title',
        'als_level',
        'examination_date',
        'learning_center',
    ];
}
