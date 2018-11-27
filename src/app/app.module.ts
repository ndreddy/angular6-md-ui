import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpsNavComponent } from './ops-nav/ops-nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { UsageplanModule } from './usageplan/usageplan.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CustomMaterialModule } from 'src/app/material.module';
import {FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import {FlexLayoutModule} from '@angular/flex-layout';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    OpsNavComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    CustomerModule,
    UsageplanModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
