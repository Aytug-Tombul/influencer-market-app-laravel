<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;
use Cookie;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;

class AuthController 
{
    public function login(Request $request){
        if(Auth::attempt($request->only('email','password'))){
            $user = Auth::user();
            $scope = $request->input('scope');
            $token = $user->createToken($scope , [$scope])->accessToken;
            if($user->isInfluencer() && $scope !== 'influencer'){
                return response([
                    'error' => 'Access denied'
                ], Response::HTTP_FORBIDDEN);
            }
            $cookie = cookie('jwt' , $token, 3600);

            return \response([
                'token' => $token
            ])->withCookie($cookie);
        }

        return response([
            'error' => 'Invalid Credentials'
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function logout(){
        $cookie= Cookie::forget('jwt');

        return \response([
            'message' =>'success'
        ])->withCookie($cookie);
    }

    public function register(RegisterRequest $request){
        $user = User::create(
            $request->only('first_name', 'last_name', 'email')
            + [
                'password' => Hash::make($request->input('password')),
                'role_id' => 1,
                'is_influencer'=>1,
            ]
        );

        return response($user);
    }

    public function user()
    {

        $user = \Auth::user();
        
        $resource = new UserResource($user);
        
        if($user->isInfluencer()){
            return $resource;
        }

        return $resource->additional([
            'data' =>[
                'permissions' => $user->permissions()
            ]
        ]);
    }

    public function updateInfo(Request $request)
    {
        $user = \Auth::user();

        $user->update($request->only('first_name', 'last_name', 'email', 'role_id'));

        return response(new UserResource($user), Response::HTTP_ACCEPTED);
    }


    public function updatePassword(Request $request)
    {
        $user = \Auth::user();

        $user->update([
            'password' => Hash::make($request->input('password'))
        ]);
        return response(new UserResource($user), Response::HTTP_ACCEPTED);
    }
}
