import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './components/user.service';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    RecoverPasswordComponent,
    DashboardComponent,
  ],
  imports: [ CommonModule,AuthRoutingModule,FormsModule,HttpClientModule],
  providers: [
    UserService
  ],

})
export class AuthModule { }
