<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Oauth(Request $request){

        /**
         * i have post this request from postman to artisan server and it do not work ..
         * so i tried xampp server and it work .. i dont no way
         */

        $http = new \GuzzleHttp\Client;

        try {


            $response = $http->post(env('APP_URL', 'http://127.0.0.1:8000').'/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => env('PASSPORT_CLIENT_ID', ''),
                    'client_secret' => env('PASSPORT_CLIENT_SECRET', ''),
                    'username' => $request->username,
                    'password' => $request->password,
                ],
            ]);

            return json_decode((string) $response->getBody(), true);

        } catch(\GuzzleHttp\Exception\BadResponseException $e){
            if($e->getCode() == 400){
                return response()->json('Invalid Request. Enter Username and Password', 400);
            }else if ($e->getCode() == 401){
                return response()->json('Your credentials are incorrect.', 401);
            }
            return response()->json('Something went wrong.', $e->getCode());
        }
    }

    public function register(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = \App\User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        return response()->json($user, 201);

    }

    public function logout(Request $request){
        foreach(Auth::user()->tokens as $token){
            $token->delete();
        }
        return response()->json([], 200);
    }
}
