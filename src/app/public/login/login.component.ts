import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ,'./../public.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder ,
    private authService: AuthService,
    private router :Router) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password:''
    })
  }

  submit(){
    const data = this.form.getRawValue();

    this.authService.login(data).subscribe(
      (res : any)=>{
        this.router.navigate(['/dashboard'])
      }
    )
  }

}
