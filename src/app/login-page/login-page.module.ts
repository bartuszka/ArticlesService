import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoadingPageRoutingModule } from './login-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingPageRoutingModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }