<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Questionnaire extends Model
{
    use HasFactory;
    protected $fillable=[
        'examination_id',
        'question',
        'answer_key',
        'specification',
        'title',
        'item_number',
        'a',
        'b',
        'c',
        'd',
        'e',
        'image_header',
        'image_a',
        'image_b',
        'image_c',
        'image_d',
        'image_e',
    ];

    public function examination(): HasOne
    {
        return $this->hasOne(Examination::class,'id','examination_id');
    }
}
