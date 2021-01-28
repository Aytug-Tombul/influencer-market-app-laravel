<?php

namespace App\Http\Controllers\Influencer;

use App\Http\Resources\ProductResource;
use App\Product;
use DB;
use Illuminate\Http\Request;

class ProductController
{
    public function index(Request $request){
        
        $query = Product::query();

        if($s = $request->input('s')){
            $query->whereRaw("title LIKE '%{$s}%'")
            ->orWhereRaw("description LIKE '%{$s}%'");
        }

        return ProductResource::collection($query->get());
    }
} 
