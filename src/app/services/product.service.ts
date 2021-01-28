import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService {

  endpoint() : string {
    return 'products';
  }
}
