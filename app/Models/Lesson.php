<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lesson extends Model
{
    use HasFactory;
    protected $fillable = [
        'module_id',
        'subject_matter',
        'discussion',
        'link',
        'file',
    ];
    public function pre_exercises(): HasMany
    {
        return $this->hasMany(PreExercise::class, 'lesson_id', 'id')->with(['questions','answer']);
    }
    public function assessments(): HasMany
    {
        return $this->hasMany(Assessment::class, 'lesson_id', 'id')->with(['questions','answer']);
    }
}
