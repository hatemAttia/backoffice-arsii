import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DialogService } from 'primeng/dynamicdialog';
import { SkillsModalComponent } from '../shared/skills-modal/skills-modal.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  userData: any = null;
  constructor(
    private membreService: MemberService,
    private authService: AuthService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.displayCurrentUser();
  }
  displayCurrentUser() {
    this.membreService.getUserById().subscribe((data) => {
      console.log(data);

      this.userData = data;
      localStorage.setItem('_user', JSON.stringify(this.userData));
      console.log(this.userData.firstLogin);

      if (!this.userData?.firstLogin) {
        this.show();
        this.membreService
          .updateMember({ firstLogin: true })
          .subscribe((res) => {
            console.log(res);
          });
      } else {
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  show() {
    const ref = this.dialogService.open(SkillsModalComponent, {
      width: '630px',
    });
  }
}
