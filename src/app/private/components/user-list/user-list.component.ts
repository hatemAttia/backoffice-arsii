import { Component, OnInit } from '@angular/core';
import { User } from 'interfaces/user';
import { Router } from '@angular/router';
import { UserService } from './userService/user.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  confirmDeleteId: number;
  users: User[] = [];
  page: any = 1;
  pageSize: any = 10;
  count = 0;
  keyword: any = null;
  currentRole = '';
  constructor(
    private userService: UserService,
    private router: Router,
    public authService: AuthService
  ) {
    this.confirmDeleteId = 0;
  }

  ngOnInit(): void {
    this.currentRole = this.authService.getUserLoginedStore().role;
    this.getUsers();
  }

  redirectToNewUsertPage() {
    this.router.navigate(['/private/addUser']);
  }

  redirectToEditPage(userId: number | undefined) {
    console.log('userId', userId);
    if (userId !== undefined) {
      this.router.navigate(['/private/editUser', userId]);
    }
  }

  private getUsers() {
    let filter = {
      role: 'MEMBER',
      firstName: this.keyword,
    };
    this.userService
      .getUserList(this.page, this.pageSize, filter)
      .subscribe((data) => {
        console.log('data', data.content);
        this.users = data.content;
        this.count = data.totalElements;
        console.log(this.count);
      });
  }

  onEnableUser(userId: number | undefined) {
    if (userId !== undefined) {
      this.userService.enableUser(userId).subscribe(() => {
        this.getUsers();
      });
    }
  }

  onDeleteAccount(userId: number | undefined) {
    if (userId !== undefined) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.getUsers();
      });
    }
  }

  paginate(event: any) {
    this.page = event.page + 1;
    this.pageSize = event.rows;
    this.getUsers();
  }
}
