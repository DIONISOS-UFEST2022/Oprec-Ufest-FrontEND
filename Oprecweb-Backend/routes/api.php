<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\GoogleSheetController;
use App\Http\Controllers\PanitiaController;
use App\Http\Controllers\VerifyEmailController;
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


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/email/verification-notification', [VerifyEmailController::class, 'resend'])->name('verification.send');
    Route::get('/logout', [AuthenticationController::class, 'logout']);
    Route::get('/me', [AuthenticationController::class, 'me']);

    Route::middleware(['admin'])->group(function () {
        Route::apiResource('users', UserController::class);
        Route::get('/panitia/div/{division}', [PanitiaController::class, 'indexFilterByDiv']);
        Route::delete('/panitia/deleteAll', [PanitiaController::class, 'delete_all']);
        Route::apiResource('panitia', PanitiaController::class);
        Route::apiResource('announcement', AnnouncementController::class);
        Route::apiResource('users', UserController::class);
        Route::get('/spreadsheet', [GoogleSheetController::class, 'init']);
    });

    Route::post('/panitia/insertData', [PanitiaController::class, 'store'])->middleware('verified');
    Route::get('/announcement', [AnnouncementController::class, 'index']);
});

Route::get('/test', [MahasiswaController::class, 'index']);
Route::post('/login', [AuthenticationController::class, 'login'])->name('login');
Route::post('/register', [UserController::class, 'store']);
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendToken']);
Route::get('/password/reset/{token}', [ForgotPasswordController::class, 'getToken'])->name("password.reset");
Route::post('/reset-password', [ForgotPasswordController::class, 'resetPassword']);
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, 'verify'])->middleware(['signed'])->name('verification.verify');
