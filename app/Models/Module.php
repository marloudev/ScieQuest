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
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class,'module_id','id')->with(['pre_exercises','assessments']);
    }
}
