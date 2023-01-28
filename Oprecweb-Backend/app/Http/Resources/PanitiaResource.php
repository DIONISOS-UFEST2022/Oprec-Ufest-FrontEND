<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PanitiaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return
            [
                'id' => $this->id,
                'nim' => $this->nim,
                'name' => $this->name,
                'email' => $this->email,
                'program_studi' => $this->program_studi,
                'vaccine_certificate' => $this->vaccine_certificate,
                'division_1' => $this->division_1,
                'division_2' => $this->division_2,
                'phone_number' => $this->phone_number,
                'reason_1' => $this->reason_1,
                'reason_2' => $this->reason_2,
                'portofolio' => $this->portofolio,
                'id_line' => $this->id_line,
                'instagram_account' => $this->instagram_account,
                'city' => $this->city,
                'is_accepted' => $this->is_accepted,
            ];
    }
}
