import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { UsageplanListComponent } from './usageplan/usageplan-list/usageplan-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { UsageplanAddComponent } from './usageplan/usageplan-add/usageplan-add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'customers/new', component: CustomerAddComponent, canActivate: [AuthGuard] },
  { path: 'usageplans', component: UsageplanListComponent , canActivate: [AuthGuard] },
  { path: 'usageplans/new', component: UsageplanAddComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
