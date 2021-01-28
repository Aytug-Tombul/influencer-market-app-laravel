import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form !:  FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private productService: ProductService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      title:'',
      description:'',
      image:'',
      price:'',
    })
  }

  submit(){
    const data = this.form.getRawValue();

    this.productService.create(data).subscribe(
      (res:any)=>{
        this.router.navigate(['/products']);
      }
    )
  }
  

}
