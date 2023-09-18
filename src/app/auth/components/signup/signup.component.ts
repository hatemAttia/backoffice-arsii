import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(
    private router: Router,
    private service: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  SignupUser() {
    this.service.SignupUserService(this.user).subscribe(
      (data) => {
        console.log(this.user);
        this.msg = 'Registration successfully';
        this.user = new User();
        this.messageService.add({
          severity: 'success',
          summary: 'Registration successfully',
          detail: 'goal',
        });
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Registration failed',
          detail: 'Registration failed',
        });
        console.log('Registration failed'), (this.msg = error.error);
        this.user = new User();
      }
    );
  }
}
