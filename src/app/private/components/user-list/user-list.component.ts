import { Component, OnInit } from '@angular/core';
import { User } from 'interfaces/user';
import { UserService } from 'services/userService/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    })
  }
}
