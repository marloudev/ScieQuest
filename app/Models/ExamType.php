<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ExamType extends Model
{
    use HasFactory;
    protected $fillable = [
        'module_id',
        'type',
        'direction'
    ];

    public function fill_in_the_blank(): HasMany
    {
        return $this->hasMany(FillInTheBlank::class, 'exam_types_id', 'id');
    }
    public function true_or_false(): HasMany
    {
        return $this->hasMany(TrueOrFalse::class, 'exam_types_id', 'id');
    }
    public function multiple_choice(): HasMany
    {
        return $this->hasMany(MultipleChoice::class, 'exam_types_id', 'id');
    }
    public function matching(): HasMany
    {
        return $this->hasMany(Matching::class, 'exam_types_id', 'id');
    }
    public function identification(): HasMany
    {
        return $this->hasMany(Indentification::class, 'exam_types_id', 'id');
    }
}
