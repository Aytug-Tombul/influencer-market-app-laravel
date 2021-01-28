import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  login(data: any){
    return this.http.post(`${environment.api}login`,data);
  }

  logout(data: any){
    return this.http.post(`${environment.api}logout`,data);
  }

  register(data:any){
    return this.http.post(`${environment.api}register`,data);
  }

  user(){
    return this.http.get(`${environment.api}user`);
  }

  updateInfo(data:any){
    return this.http.put(`${environment.api}users/info`,data);
  }

  updatePassword(data:any){
    return this.http.put(`${environment.api}users/password`,data);
  }
}
