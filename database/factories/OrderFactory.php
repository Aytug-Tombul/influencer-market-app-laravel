<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Http\Resources\OrderResource;
use App\OrderItem;
use Faker\Generator as Faker;

$factory->define(\App\Order::class, function (Faker $faker) {
    
    return [
        'first_name'=>$faker->firstName,
        'last_name'=>$faker->lastName,
        'email'=>$faker->email,
    ];
});
