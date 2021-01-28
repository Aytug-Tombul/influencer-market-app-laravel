import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService {

  endpoint(){
    return 'orders'; 
  }

  export(){
    return this.http.get(`${environment.api}export`, {
      responseType:'blob'
    });
  }

  chart(){
    return this.http.get(`${environment.api}chart`);
  }
}
