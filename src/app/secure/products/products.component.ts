import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[];
  lastPage !:number
  constructor(
    private productService : ProductService,
  ) { }

  ngOnInit(): void {
    this.refresh()
  }

  delete(id:number){
    if(confirm('Are you sure you want to delete this user ?'))
    this.productService.delete(id).subscribe(
      res=>{
        this.products = this.products.filter(el=> el.id !== id );
      }
    )
  };

  refresh(currentPage = 1){
    this.productService.all(currentPage).subscribe(
      (res: any)=>{
        this.products = res.data;
        this.lastPage = res.meta.last_page
      }
    )
  }
}
