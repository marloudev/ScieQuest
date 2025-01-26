<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'fname',
        'lname',
        'email',
    ];

    public function student(): HasMany
    {
        return $this->hasMany(Student::class, "teacher_id", "user_id")->with(['student']);
    }
}
