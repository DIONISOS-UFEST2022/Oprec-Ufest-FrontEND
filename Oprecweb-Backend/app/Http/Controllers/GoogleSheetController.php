<?php

namespace App\Http\Controllers;

use App\Models\panitia;
use App\Http\Services\GoogleSheetsServices;
use Illuminate\Http\Request;

class GoogleSheetController extends Controller
{
    public function init()
    {
        $service = new GoogleSheetsServices();
        $service->DeleteSheet();
        $panitia = Panitia::all()->toArray();

        if (!$panitia) {
            return response()->json('table Panitia is empty!');
        }

        foreach ($panitia as $value) {
            $arr[] =
                [
                    $value["nim"],
                    $value["name"],
                    $value['email'],
                    $value['program_studi'],
                    $value['vaccine_certificate'],
                    $value['division_1'],
                    $value['division_2'],
                    $value['phone_number'],
                    $value['reason_1'],
                    $value['reason_2'],
                    $value['portofolio'],
                    $value['id_line'],
                    $value['instagram_account'],
                    $value['city'],
                    $value["is_accepted"]
                ];
        }

        $data =  $service->writeSheet($arr);

        if (!$data) {
            return response()->json('Something When Wrong... try again later');
        }
        return response()->json('success!');
    }
}
