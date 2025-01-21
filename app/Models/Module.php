<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Module extends Model
{
    use HasFactory;
    protected $fillable = [
        'quarter',
        'title',
        'grade',
        'introductory',
        'wintn',
    ];
    public function exam_type(): HasMany
    {
        return $this->hasMany(ExamType::class,'module_id','id')->with(['identification','fill_in_the_blank', 'true_or_false', 'multiple_choice', 'matching']);
    }
}
