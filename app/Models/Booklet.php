<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Booklet extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'als_level',
    ];

    public function examinations(): HasMany
    {
        return $this->hasMany(Examination::class, 'booklet_id', 'id')->with(['question']);
    }

}
