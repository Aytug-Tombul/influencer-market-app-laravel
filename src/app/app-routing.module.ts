import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Permission } from './classes/permission';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RegisterComponent } from './public/register/register.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { OrderViewComponent } from './secure/orders/order-view/order-view.component';
import { OrdersComponent } from './secure/orders/orders.component';
import { ProductCreateComponent } from './secure/products/product-create/product-create.component';
import { ProductEditComponent } from './secure/products/product-edit/product-edit.component';
import { ProductsComponent } from './secure/products/products.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { RoleCreateComponent } from './secure/roles/role-create/role-create.component';
import { RoleEditComponent } from './secure/roles/role-edit/role-edit.component';
import { RolesComponent } from './secure/roles/roles.component';
import { SecureComponent } from './secure/secure.component';
import { UserCreateComponent } from './secure/users/user-create/user-create.component';
import { UserEditComponent } from './secure/users/user-edit/user-edit.component';
import { UsersComponent } from './secure/users/users.component';

const routes: Routes = [
  { path: '',
  component: SecureComponent,
  children: [
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'users' , component:UsersComponent},
    {path:'users/create' , component:UserCreateComponent},
    {path:'users/:id/edit' , component:UserEditComponent},
    {path:'profile' , component:ProfileComponent},
    {path:'roles' , component:RolesComponent},
    {path:'roles/create' , component:RoleCreateComponent},
    {path:'roles/:id/edit' , component:RoleEditComponent},
    {
      path:'products',
      component:ProductsComponent,
      canActivate:[Permission],
      data:['view_products','edit_products']
    },

    {path:'products/create' , component:ProductCreateComponent},
    {path:'products/:id/edit' , component:ProductEditComponent},
    {path:'orders' , component:OrdersComponent},
    {path:'orders/:id' , component:OrderViewComponent},
  ] },
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
