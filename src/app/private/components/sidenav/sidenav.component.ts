import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  userData: any = null;
  constructor(
    private membreService: MemberService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.displayCurrentUser();
  }
  displayCurrentUser() {
    this.membreService.getUserById().subscribe((data) => {
      console.log(data);

      this.userData = data;
      localStorage.setItem('_user', JSON.stringify(this.userData));
    });
  }

  logout() {
    this.authService.logout();
  }
}
