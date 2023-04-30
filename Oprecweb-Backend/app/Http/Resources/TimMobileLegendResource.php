<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TimMobileLegendResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'ketua' => $this->ketua,
            'nama' => $this->nama,
            'jurusan' => $this->jurusan,
            'angkatan' => $this->angkatan,
            'userID' => $this->userID,
            'username' => $this->userName,
            'phoneNumber' => $this->phoneNumber,
            'diterima' => $this->diterima,
            'tokenID' => $this->tokenID,
        ];
    }
}
