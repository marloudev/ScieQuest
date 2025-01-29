<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'teacher_id',
        'fname',
        'lname',
        'email',
    ];

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class, "teacher_id", "employee_id");
    }
}
