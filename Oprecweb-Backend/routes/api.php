<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\GoogleSheetController;
use App\Http\Controllers\PanitiaController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

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
    Route::post('/panitia/insertData', [PanitiaController::class, 'store']);
    Route::delete('/panitia/deleteAll', [PanitiaController::class, 'delete_all'])->middleware('admin');
    Route::apiResource('panitia', PanitiaController::class)->middleware('admin');
    Route::apiResource('announcement', AnnouncementController::class)->middleware('admin');
    Route::get('/announcement', [AnnouncementController::class, 'index']);
    Route::get('/spreadsheet', [GoogleSheetController::class, 'init'])->middleware('admin');
});

Route::get('/test', [MahasiswaController::class, 'index']);
Route::post('/login', [AuthenticationController::class, 'login']);
Route::post('/register', [UserController::class, 'store']);
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendToken']);
Route::get('/reset-password/{token}', [ForgotPasswordController::class, 'getToken'])->name("password.reset");
Route::post('/reset-password', [ForgotPasswordController::class, 'resetPassword']);
