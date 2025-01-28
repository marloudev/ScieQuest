<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quest extends Model
{
    use HasFactory;
    protected $fillable = [
        'learning_id',
        'lesson_id',
        'type',
        'exam_type',
        'direction',
        'question',
        'answer_key',
        'file',
    ];

    public function quest(): HasMany
    {
        return $this->hasMany(Quest::class, 'lesson_id', 'id');
    }
}
