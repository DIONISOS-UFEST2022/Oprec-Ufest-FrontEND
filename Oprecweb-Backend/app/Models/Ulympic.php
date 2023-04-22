<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ulympic extends Model
{
    use HasFactory;

    public $table = "ulympics";

    protected $fillable = [
        'namaTim',
        'phoneNumber',
        'buktiPembayaran',
    ];

    public function timMobileLegend()
    {
        return $this->hasMany(TimMobileLegend::class, 'namaTim', 'namaTim');
    }
}
