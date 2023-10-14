import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'interfaces/user';
import { UserService } from '../userService/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  userForm!: FormGroup;

  newUser: any = {};

  ngOnInit(): void {}

  onSubmit(userData: any) {
    this.userService
      .addUser({ ...userData, userName: userData.email })
      .subscribe((response) => {
        console.log('response', response);
        if (response) {
          this.router.navigate(['/private/user-list']);
        }
      });
  }

  goBack() {
    this.router.navigate(['/private/user-list']);
  }
}
