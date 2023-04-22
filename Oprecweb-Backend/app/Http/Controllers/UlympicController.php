<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TimMobileLegendResource;
use App\Http\Resources\UlympicResource;
use App\Models\TimMobileLegend;
use App\Models\Ulympic;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UlympicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tim = Ulympic::all();
        if (!$tim) {
            return response()->json([
                'success' => false
            ], 409);
        }
        return response()->json([
            'success' => true,
            'data' => UlympicResource::collection($tim),
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
            'namaTim' => 'string|required|unique:Ulympics',
            'phoneNumber' => 'string|required|numeric:11|unique:Ulympics',
            'buktiPembayaran' => 'image|required',
        ]);

        $filename = Str::random(25);
        $extension = $request->buktiPembayaran->extension();
        $isStored = Storage::putFileAs('public/bukti_pembayaran',  $request->buktiPembayaran, $filename . '.' . $extension);

        if ($isStored) {
            $ulympic = Ulympic::create($request->all());
            $ulympic->buktiPembayaran = $filename . '.' . $extension;
            $ulympic->save();
        } else {
            return response()->json([
                'success' => false
            ], 409);
        }

        return response()->json([
            'success' => true,
            'data' => new UlympicResource($ulympic),
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
        $ulympic = Ulympic::findOrFail($id);

        if (!$ulympic) {
            return response()->json([
                'success' => false,
            ], 409);
        }

        return response()->json([
            'success' => true,
            'data' => new UlympicResource($ulympic),
            'tim' => TimMobileLegendResource::collection($ulympic->timMobileLegend),
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
        $ulympic = Ulympic::findOrFail($id);

        $request->validate([
            'namaTim' => 'string|unique:Ulympics,namaTim,' . $id . 'id',
            'phoneNumber' => 'string|numeric:11|unique:Ulympics,phoneNumber,' . $id . 'id',
            'buktiPembayaran' => 'image',
        ]);

        $input =  collect(request()->all())->filter()->all();

        if ($request->buktiPembayaran) {
            $imageFolder = Storage::disk('bukti_pembayaran');
            if ($imageFolder->exists($ulympic->buktiPembayaran)) {
                $imageFolder->delete($ulympic->buktiPembayaran);
            }
            $filename = Str::random(25);
            $extension = $request->buktiPembayaran->extension();
            Storage::putFileAs('public/bukti_pembayaran', $request->buktiPembayaran, $filename . '.' . $extension);
            $ulympic->update($input);
            $ulympic->buktiPembayaran = $filename . '.' . $extension;
        } else {
            $ulympic->update($input);
        }
        $ulympic->save();

        if ($ulympic) {
            return response()->json([
                'success' => true,
                'data' => new UlympicResource($ulympic, 201),
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
        $ulympic = Ulympic::findOrFail($id);
        $tim = $ulympic->timMobileLegend;

        $imageFolder = Storage::disk('bukti_pembayaran');
        if ($imageFolder->exists($ulympic->buktiPembayaran)) {
            $imageFolder->delete($ulympic->buktiPembayaran);
        }

        $isDeleted = $ulympic->forceDelete();

        if ($tim) {
            foreach ($tim as $t) {
                $imageFolder = Storage::disk('foto_ktm');
                if ($imageFolder->exists($t->fotoKtm)) {
                    $imageFolder->delete($t->fotoKtm);
                }
                $t->forceDelete();
            }
        }

        if ($isDeleted) {
            return response()->json([
                'success' => true,
                'msg'    => "tim" . $ulympic->namaTim . " has been deleted!",
            ], 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }
}
