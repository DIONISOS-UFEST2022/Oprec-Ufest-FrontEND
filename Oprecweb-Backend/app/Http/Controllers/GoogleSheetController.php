<?php

namespace App\Http\Controllers;

use App\Models\panitia;
use App\Models\Ulympic;
use App\Http\Services\GoogleSheetsServices;
use App\Models\TimMobileLegend;
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
            if ($value['vaccine_certificate'] != 'none') {
                $imgLink =  asset('storage/vaccine_image/') . ('/') .  $value['vaccine_certificate'];
            } else {
                $imgLink = $value['vaccine_certificate'];
            }
            
            $arr[] =
                [
                    $value["nim"],
                    $value["name"],
                    $value['email'],
                    $value['program_studi'],
                    $value['angkatan'],
                    $imgLink,
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
            return response()->json([
                'success' => false,
                'msg' => 'Something When Wrong... try again later',
            ], 403);
        }

        return response()->json([
            'success' => true,
        ], 201);
    }

    public function appendData($panitia)
    {
        $service = new GoogleSheetsServices();

        if ($panitia->vaccine_certificate != 'none') {
            $imgLink =  asset('storage/vaccine_image/') . ('/') .  $panitia->vaccine_certificate;
        } else {
            $imgLink = $panitia->vaccine_certificate;
        }
        
        $arr[] =
            [
                $panitia->nim,
                $panitia->name,
                $panitia->email,
                $panitia->program_studi,
                $panitia->angkatan,
                $imgLink,
                $panitia->division_1,
                $panitia->division_2,
                $panitia->phone_number,
                $panitia->reason_1,
                $panitia->reason_2,
                $panitia->portofolio,
                $panitia->id_line,
                $panitia->instagram_account,
                $panitia->city,
                $panitia->is_accepted
            ];

        $data =  $service->appendSheet($arr);

        if (!$data) {
            return response()->json([
                'success' => false,
                'msg' => 'Something When Wrong... try again later',
            ], 403);
        }
        return response()->json([
            'success' => true,
        ], 201);
    }


    public function initMlTeam()
    {

        $service = new GoogleSheetsServices();
        $service->DeleteSheet();
        $ulympic = Ulympic::all()->toArray();

        if (!$ulympic) {
            return response()->json('table ulympic is empty!');
        }


        foreach ($ulympic as $uly) {
            $tim = TimMobileLegend::where('namaTim', $uly['namaTim'])->get();
            if (count($tim) == 0) {
                $arr[] = [
                    $uly['namaTim'],
                    $uly['phoneNumber'],
                    $uly['buktiPembayaran'],
                ];
            }
            foreach ($tim as $member) {

                $arr[] = [
                    $uly['namaTim'],
                    $uly['phoneNumber'],
                    $uly['buktiPembayaran'],
                    $member['ketua'],
                    $member['nama'],
                    $member['jurusan'],
                    $member['angkatan'],
                    $member['userID'],
                    $member['userName'],
                    $member['fotoKtm'],
                    $member['diterima'],
                ];
            }
            $service->writeSheet($arr);
        }

        return response()->json([
            'success' => true,
        ], 201);
    }
}
