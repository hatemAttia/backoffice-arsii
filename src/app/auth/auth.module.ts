import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent, RecoverPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [UserService],
})
export class AuthModule {}
