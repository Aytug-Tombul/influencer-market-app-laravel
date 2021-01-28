import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/interfaces/role';
import { User } from 'src/app/interfaces/user';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  form!: FormGroup;
  roles: Role[] = [];
  user! : User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      role_id: '',
    });

    this.roleService.all().subscribe((res: any) => {
      this.roles = res.data;
    });
    this.route.params.subscribe((params) => {
      this.userService.get(params.id).subscribe((res:any) => {
        this.user = res.data;
        this.form.patchValue({
          first_name: this.user.first_name,
          last_name:this.user.last_name,
          email: this.user.email,
          role_id:this.user.role.id,
        });
      });
    });
  }

  submit() {
    const data = this.form.getRawValue();

    this.userService.update(this.user.id,data).subscribe(
      res=>{
        this.router.navigate(['/users']);
      }
    )
  }
}
