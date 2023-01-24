<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\ReactController;
use App\Http\Controllers\TestTableController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\GoogleSheetController;
use App\Http\Controllers\PanitiaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/logout', [AuthenticationController::class, 'logout']);
    Route::get('/me', [AuthenticationController::class, 'me']);

    Route::apiResource('users', UserController::class)->middleware('admin');
    Route::apiResource('panitia', PanitiaController::class)->middleware('admin');
    Route::apiResource('announcement', AnnouncementController::class)->middleware('admin');

    Route::get('/announcement', [AnnouncementController::class, 'index']);
    Route::post('/panitia/insertData', [PanitiaController::class, 'store']);
});

Route::get('/test', [MahasiswaController::class, 'index']);
Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [UserController::class, 'store']);
Route::post('/forgot-password', [ForgotPasswordController::class, 'getToken']);
Route::post('/reset-password/{token}', [ForgotPasswordController::class, 'reset'])->name("password.reset");

Route::get('/spreadsheet', [GoogleSheetController::class, 'init']);
Route::get('/spreadsheet/update', [GoogleSheetController::class, 'updateData']);
