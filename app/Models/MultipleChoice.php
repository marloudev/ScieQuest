<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class MultipleChoice extends Model
{
    use HasFactory;
    protected $fillable = [
        'exam_types_id',
        'question',
        'answer',
        'answer_key',
        'points',
    ];
    public function exam_type(): HasOne
    {
        return $this->hasOne(ExamType::class,'id','exam_types_id');
    }
}
