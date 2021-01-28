<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\OrderResource;
use App\Order;
use Gate;
use Illuminate\Http\Request;

class OrderController
{
    public function index()
    {
        Gate::authorize('view','products');
        $order = Order::paginate();

        return OrderResource::collection($order);
    }

    public function show($id)
    {
        Gate::authorize('view','products');
        return new OrderResource(Order::find($id));
    }
    //CSV Export
    public function export()
    {   
        Gate::authorize('view','products');
        $headers = [
            'Content-type' => 'text/csv',
            'Content-Disposition' => 'attachment ; filename orders.csv',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, past-check=0, pre-check=0',
            'Expires' => '0',
        ];

        $callback = function () {
            $orders = Order::all();
            $file = fopen('php://output', 'w');


            //Header Row
            fputcsv($file, ['ID', 'Name', 'Email', 'Product Title', 'Price', 'Quantity']);

            //Body
            foreach ($orders as $order) {
                fputcsv($file, [$order->id, $order->name, $order->email, '', '', '']);
                foreach ($order->orderItems as  $orderItem) {
                    fputcsv($file, ['', '', '', $orderItem->product_title, $orderItem->price, $orderItem->quantity]);
                }
            }
            fclose($file);
        };

        return \Response::stream($callback, 200, $headers);
    }
}
