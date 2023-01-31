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
        if ($info) {
            return response()->json([
                'success' => true,
                'data' => AnnouncementResource::collection($info),
            ], 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
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
            return response()->json([
                'success' => true,
                'data' => new AnnouncementResource($info, 201),
            ], 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
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
            return response()->json([
                'success' => true,
                'data' => new AnnouncementResource($info, 201),
            ], 201);
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
            return response()->json([
                'success' => true,
                'data' => new AnnouncementResource($info, 201),
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
        $info = Announcement::findOrFail($id);

        if ($info) {
            $tempName = $info->id;
            $info->forceDelete();
            return response()->json([
                'success' => true,
                'msg' => "announcement " . $tempName . "has been deleted!",
            ], 201);
        } else {
            return response()->json([
                'success' => false,
            ], 404);
        }
    }
}
