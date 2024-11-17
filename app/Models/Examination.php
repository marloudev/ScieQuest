<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Examination extends Model
{
    use HasFactory;
    protected $fillable =[
        'booklet_id',
        'title',
        'sub_title',
        'instruction',
        'als_level',
    ];
    public function questionnaire(): HasOne
    {
        return $this->hasOne(Questionnaire::class,'unique_id','reference_id')->with(['learning_center']);
    }
    public function question(): HasMany
    {
        return $this->hasMany(Questionnaire::class,'examination_id','id');
    }
}
