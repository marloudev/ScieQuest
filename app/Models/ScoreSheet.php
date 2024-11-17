<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ScoreSheet extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'booklet_id',
        'overall_score',
        'als_level',
        'date',
    ];
    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class, 'score_sheet_id', 'id')
                    ->orderBy('questionnaire_id', 'asc')
                    ->with(['questionnaire']);
    }
    public function booklet(): HasOne
    {
        return $this->hasOne(Booklet::class, 'id', 'booklet_id')->with(['examinations']);
    }
}
