import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    RecoverPasswordComponent,
  ],
  imports: [ CommonModule,AuthRoutingModule],
  providers: [],

})
export class AuthModule { }
