import { Component, OnInit } from '@angular/core';
import { User } from '../types/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  user = new User();

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}
  ResetPassword() {
    this.service.ResetPasswordService(this.user.email).subscribe(
      (response) => {
        console.log('Password reset email sent', response);
      },
      (error) => {
        // Handle errors, show error message to the user
        console.error('Error sending password reset email', error);
      }
    );
  }
}
