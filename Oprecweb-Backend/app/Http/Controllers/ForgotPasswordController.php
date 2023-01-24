<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;



class ForgotPasswordController extends Controller
{
    public function getToken(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink($request->only('email'));

        if ($status == Password::RESET_LINK_SENT) {
            return response()->json([
                'status' => __($status)
            ]);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)]
        ]);
    }

    public function reset(Request $request)
    {
        $credential = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => [
                'string',
                Password::min(8)
                    ->mixedCase()
                    ->numbers(),
                'confirmed'
            ],
        ]);


        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );
    }
}
