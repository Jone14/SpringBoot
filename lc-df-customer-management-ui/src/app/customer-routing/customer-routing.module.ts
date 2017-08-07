import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: CustomerDashboardComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
  { path: 'add',     component: CustomerFormComponent },
  { path: 'customer', component: CustomerComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CustomerRoutingModule { }
