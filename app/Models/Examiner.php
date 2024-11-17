<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Examiner extends Model
{
    use HasFactory;
    protected $fillable = [
        'reference_id',
        'examiner_id',
    ];
    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','examiner_id');
    }
    public function schedule(): HasOne
    {
        return $this->hasOne(Schedule::class,'unique_id','reference_id')->with(['learning_center','teacher']);
    }
}

