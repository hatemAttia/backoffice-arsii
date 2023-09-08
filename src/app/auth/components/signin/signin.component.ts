import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(
    private router: Router,
    private service: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  SigninUser() {
    this.service.SigninUserService(this.user).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/private/formations']);
      },
      (error) => {
        console.log('exception occured'),
          this.messageService.add({
            severity: 'error',
            summary: 'login failed ! please check your email or password',
            detail: 'Please check your information !!!',
          });
      }
    );
  }
}
