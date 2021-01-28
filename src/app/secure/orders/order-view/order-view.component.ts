import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from 'src/app/interfaces/order-item';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  orderItems: OrderItem[]=[];
  constructor(private orderService :OrderService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        this.orderService.get(params.id).subscribe(
          (res:any)=>{
            this.orderItems = res.data.order_items;
          }
        )
      }
    )
  }

}
