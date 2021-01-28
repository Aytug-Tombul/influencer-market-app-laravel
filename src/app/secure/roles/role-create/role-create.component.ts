import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss'],
})
export class RoleCreateComponent implements OnInit {
  permissions: Permission[] = [];
  form!: FormGroup;

  constructor(
    private permissionService: PermissionService,
    private roleService:RoleService,
    private formBuilder: FormBuilder,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      permissions: this.formBuilder.array([]),
    });

    this.permissionService.all().subscribe((res: any) => {
      this.permissions = res.data;
      this.permissions.forEach((p: Permission) => {
        this.permissionArray.push(
          this.formBuilder.group({
            value: false,
            id: p.id,
          })
        );
      });
    });
  }

  get permissionArray() {
    return this.form.get('permissions') as FormArray;
  }

  submit() {
    const formData = this.form.getRawValue();

    const data = {
      name: formData.name,
      permissions:formData.permissions.filter((p: { value: boolean; }) => p.value == true).map((p: { id: any; }) => p.id)
     };
     
    this.roleService.create(data).subscribe(
      (res:any) =>{
        this.router.navigate(['/roles']);
      }
    )
  }
}
