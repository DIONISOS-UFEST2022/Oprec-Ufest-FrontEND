<?php

namespace App\Http\Controllers;

use App\Http\Resources\TimMobileLegendResource;
use App\Models\TimMobileLegend;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TimMobileLegendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tim = TimMobileLegend::all();

        if (!$tim) {
            return response()->json([
                'success' => false,
            ], 409);
        }
        return response()->json([
            'success' => true,
            'data' => TimMobileLegendResource::collection($tim),
        ], 201);
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
            'namaTim' => 'string|required|exists:Ulympics,namaTim',
            'ketua' => 'string|required',
            'nama' => 'string|required',
            'angkatan' => 'string|numeric:4|required',
            'jurusan' =>  'string|required',
            'userID' => 'string|required|unique:Tim_mobile_legends,userID',
            'userName' => 'string|required',
            'fotoKtm' => 'image|required',
        ], [
            'namaTim.exists' => 'this team name does not exist'
        ]);

        $filename = Str::random(25);
        $extension = $request->fotoKtm->extension();
        $isStored = Storage::putFileAs('public/foto_ktm',  $request->fotoKtm, $filename . '.' . $extension);

        if ($isStored) {
            $tim = TimMobileLegend::create($request->all());
            $tim->fotoKtm = $filename . '.' . $extension;
            $tim->save();
        } else {
            return response()->json([
                'success' => false
            ], 409);
        }

        $service = new GoogleSheetController();
        $service->initMlTeam();

        return response()->json([
            'success' => true,
            'data' => new TimMobileLegendResource($tim),
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tim = TimMobileLegend::findOrFail($id);

        if (!$tim) {
            return response()->json([
                'success' => false
            ], 409);
        }

        return response()->json([
            'success' => true,
            'data' => new TimMobileLegendResource($tim),
        ], 201);
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
        $tim = TimMobileLegend::findorfail($id);

        $request->validate([
            'namaTim' => 'string|exists:Ulympics,namaTim',
            'ketua' => 'string',
            'nama' => 'string',
            'angkatan' => 'string|numeric:4',
            'jurusan' =>  'string',
            'userID' => 'string|unique:Tim_mobile_legends,userID,' . $id . 'id',
            'userName' => 'string',
            'fotoKtm' => 'image',
        ], [
            'namaTim.exists' => 'this team name does not exist'
        ]);

        $input = collect(request()->all())->filter()->all();

        if ($request->fotoKtm) {
            $imageFolder = Storage::disk('foto_ktm');
            if ($imageFolder->exists($tim->fotoKtm)) {
                $imageFolder->delete($tim->fotoKtm);
            }
            $filename = Str::random(25);
            $extension = $request->fotoKtm->extension();
            Storage::putFileAs('public/foto_ktm', $request->fotoKtm, $filename . '.' . $extension);
            $tim->update($input);
            $tim->fotoKtm = $filename . '.' . $extension;
        } else {
            $tim->update($input);
        }
        $tim->save();

        if ($tim) {
            return response()->json([
                'success' => true,
                'data' => new TimMobileLegendResource($tim, 201),
            ], 201);
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
        $tim = TimMobileLegend::findOrFail($id);

        $imageFolder = Storage::disk('foto_ktm');
        if ($imageFolder->exists($tim->fotoKtm)) {
            $imageFolder->delete($tim->fotoKtm);
        }

        $isDeleted = $tim->forceDelete();

        if ($isDeleted) {
            return response()->json([
                'success' => true,
                'msg'    => "tim" . $tim->nama . " has been deleted!",
            ], 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }
}
