<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimMobileLegend extends Model
{
    use HasFactory;

    protected $fillable = [
        'namaTim',
        'ketua',
        'nama',
        'jurusan',
        'angkatan',
        'userID',
        'userName',
        'fotoKtm',
        'diterima',
    ];

    public function ulympic()
    {
        return $this->belongsTo(Ulympic::class, 'namaTim', 'namaTim');
    }
}
