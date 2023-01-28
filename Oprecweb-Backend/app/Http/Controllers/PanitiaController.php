<?php

namespace App\Http\Controllers;

use App\Http\Resources\PanitiaResource;
use App\Models\panitia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Controllers\GoogleSheetController;
use App\Http\Services\GoogleSheetsServices;
use Carbon\Carbon;

class PanitiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $panitia = panitia::all();
        return PanitiaResource::collection($panitia);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'nim' => 'required|digits:11|numeric|unique:panitia|regex:/^0+\d\d\d\d\d$/',
            'name' => 'required',
            'email' => 'required|email|unique:panitia',
            'program_studi' => 'required',
            'vaccine_certificate' => 'image|file|max:1024',
            'angkatan' => 'required|string:4|regex:/^[0-9]*$/',
            'division_1' => 'required|string',
            'division_2' => 'required|string',
            'phone_number' => 'required|numeric:11|unique:panitia',
            'reason_1' => 'required|max:1000|string',
            'reason_2' => 'required|max:1000|string',
            'portofolio' => 'required|url',
            'id_line' => 'required',
            'instagram_account' => 'required|url',
            'city' => 'required',
        ]);

        $panitia = panitia::create($request->all());

        if ($request->vaccine_certificate != "") {
            $filename = Str::random(25);
            $extension = $request->vaccine_certificate->extension();
            Storage::putFileAs('vaccine_image', $request->vaccine_certificate, $filename . '.' . $extension);
            $panitia->vaccine_certificate = $filename . '.' . $extension;
        } else {
            $panitia->vaccine_certificate = "none";
        }

        $panitia->is_accepted = 0;

        $service = new GoogleSheetController();
        $service->appendData($panitia);

        if ($panitia) {
            return new PanitiaResource($panitia, 201);
        } else {
            return response()->json([
                'success' => false,
            ], 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $panitia = Panitia::findOrFail($id);

        if ($panitia) {
            return new PanitiaResource($panitia, 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $panitia = Panitia::findOrFail($id);

        $request->validate([
            'nim' => 'digits:11|numeric|regex:/^0+\d\d\d\d\d$/|unique:panitia,nim,' . $id . ',id',
            'name' => 'string',
            'email' => 'email|unique:panitia,email,' . $id . ',id',
            'program_studi' => 'string',
            'angkatan' => 'required|string:4|regex:/^[0-9]*$/',
            'vaccine_certificate' => 'image|mimes:jpeg,jpg,png,bmp|max:200000',
            'division_1' => 'string',
            'division_2' => 'string',
            'phone_number' => 'numeric:11|unique:panitia,phone_number,' . $id . ',id',
            'reason_1' => 'max:500',
            'reason_2' => 'max:500',
            'portofolio' => 'url',
            'id_line' => 'string',
            'instagram_account' => 'url',
            'city' => 'string',
            'is_accepted' => 'numeric:1'
        ]);


        $input = collect(request()->all())->filter()->all();

        if ($request->vaccine_certificate) {
            $imageFolder = Storage::disk('vaccine_image');
            if ($imageFolder->exists($panitia->vaccine_certificate)) {
                $imageFolder->delete($panitia->vaccine_certificate);
            }
            $filename = Str::random(25);
            $extension = $request->vaccine_certificate->extension();

            Storage::putFileAs('vaccine_image', $request->vaccine_certificate, $filename . '.' . $extension);
            $panitia->update($input);
            $panitia->vaccine_certificate = $filename . '.' . $extension;
            $panitia->save();
        } else {
            $panitia->update($input);
        }

        $panitia->save();

        $service = new GoogleSheetController();
        $service->init();

        if ($panitia) {
            return new PanitiaResource($panitia, 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $panitia = panitia::findOrFail($id);
        $imageFolder = Storage::disk('vaccine_image');
        if ($imageFolder->exists($panitia->vaccine_certificate)) {
            $imageFolder->delete($panitia->vaccine_certificate);
        }
        $panitia->forceDelete();

        $service = new GoogleSheetController();
        $service->init();

        if ($panitia) {
            return response()->json("Panitia " . $panitia->name . "has been deleted!");
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }

    public function delete_all()
    {
        $panitia = panitia::All();

        foreach ($panitia as $p) {
            $imageFolder = Storage::disk('vaccine_image');
            if ($imageFolder->exists($p->vaccine_certificate)) {
                $imageFolder->delete($p->vaccine_certificate);
            }
            $p->forceDelete();
        }

        $service = new GoogleSheetController();
        $service->init();

        if ($panitia) {
            return response()->json("all panitia " . "has been deleted!");
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }
}
