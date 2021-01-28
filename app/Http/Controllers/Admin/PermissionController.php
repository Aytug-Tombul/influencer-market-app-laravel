<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\PermissionResource;
use App\Permission;
use Illuminate\Http\Request;

class PermissionController
{
    public function index(){
        return PermissionResource::collection(Permission::all());
    }
}
