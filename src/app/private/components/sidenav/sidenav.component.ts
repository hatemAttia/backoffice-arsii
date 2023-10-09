import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  userData: any = null;
  constructor(private membreService: MemberService) {}

  ngOnInit(): void {
    this.displayCurrentUser();
  }
  displayCurrentUser() {
    this.membreService.getUserById().subscribe((data) => {
      console.log(data);

      this.userData = data;
    });
  }
}
