import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';
import { ProductsComponent } from './products/products.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderViewComponent } from './orders/order-view/order-view.component';

@NgModule({
  declarations: [SecureComponent, NavComponent, MenuComponent, DashboardComponent, UsersComponent, ProfileComponent, UserCreateComponent, UserEditComponent, RolesComponent, RoleCreateComponent, RoleEditComponent, ProductsComponent, PaginatorComponent, ProductCreateComponent, ProductEditComponent, ImageUploadComponent, OrdersComponent, OrderViewComponent],
  exports:[SecureComponent],
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
})
export class SecureModule {}
