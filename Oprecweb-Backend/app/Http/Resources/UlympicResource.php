<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UlympicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $buktiPembayaran = $this->buktiPembayaran;
        $buktiWA = $this->buktiWA;
        $fotoKtm = $this->fotoKtm;


        if ($buktiPembayaran != null) {
            $buktiPembayaran = asset('storage/bukti_pembayaran/') . ('/') . $this->buktiPembayaran;
        } else  $buktiPembayaran = "none";

        if ($buktiWA != null) {
            $buktiWA = asset('storage/bukti_WA/') . ('/') . $this->buktiWA;
        } else  $buktiWA = "none";

        if ($fotoKtm != null) {
            $fotoKtm = asset('storage/foto_ktm/') . ('/') . $this->fotoKtm;
        } else $fotoKtm = "none";

        return
            [
                'id' => $this->id,
                'namaTim' => $this->namaTim,
                'ketua' => $this->ketua,
                'buktiPembayaran' => $buktiPembayaran,
                'buktiWA' => $buktiWA,
                'fotoKTM' => $fotoKtm,
                'jumlahMember' => $this->jumlahMember,
                'tokenID' => $this->tokenID,
            ];
    }
}
