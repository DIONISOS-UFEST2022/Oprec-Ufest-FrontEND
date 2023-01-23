<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnnouncementResource;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $info = Announcement::all();
        return AnnouncementResource::collection($info);
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
            'info' => 'required|string',
        ]);

        $info = Announcement::create($request->all());

        if ($info) {
            return new AnnouncementResource($info, 201);
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
        $info = Announcement::findOrFail($id);

        if ($info) {
            return new AnnouncementResource($info, 201);
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
        $info = Announcement::findOrFail($id);

        $request->validate([
            'info' => 'required|string',
        ]);

        $input = collect(request()->all())->filter()->all();

        $info->update($input);

        if ($info) {
            return new AnnouncementResource($info, 201);
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
        $info = Announcement::findOrFail($id);

        if ($info) {
            $tempName = $info->name;
            $info->forceDelete();
            return response()->json("announcement " . $tempName . "has been deleted!");
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }
}
