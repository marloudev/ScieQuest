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
        'subject_matter',
        'discussions',
        'link',
        'type1',
        'direction1',
        'type2',
        'direction2'
    ];

    public function fill_in_the_blank(): HasMany
    {
        return $this->hasMany(FillInTheBlank::class, 'exam_types_id', 'id')->with(['exam_type']);
    }
    public function true_or_false(): HasMany
    {
        return $this->hasMany(TrueOrFalse::class, 'exam_types_id', 'id')->with(['exam_type']);
    }
    public function multiple_choice(): HasMany
    {
        return $this->hasMany(MultipleChoice::class, 'exam_types_id', 'id')->with(['exam_type']);
    }
    public function matching(): HasMany
    {
        return $this->hasMany(Matching::class, 'exam_types_id', 'id')->with(['exam_type']);
    }
    public function identification(): HasMany
    {
        return $this->hasMany(Identification::class, 'exam_types_id', 'id')->with(['exam_type']);
    }
}
