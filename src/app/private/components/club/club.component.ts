import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';
import { MessageService } from 'primeng/api';
import { Popover } from 'bootstrap';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss'],
})
export class ClubComponent implements OnInit {
  clubs: any[] = [];
  selectedClub = {
    name: '',
    description: '',
    logo: '',
    contact: '',
    location: '',
    status: '',
  };
  currentRole: any;
  constructor(
    private clubService: ClubService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentRole = this.authService.getUserLoginedStore().role;

    Array.from(document.querySelectorAll('a[data-toggle="popover"]')).forEach(
      (popverMode) => new Popover(popverMode)
    );
    this.getAllClubs();
  }

  private getAllClubs() {
    this.clubService.getClub().subscribe((data: any) => {
      console.log('data', data);
      this.clubs = data;
    });
  }
  goToEditPage() {}

  addClubCheck(data: any) {
    if (data) {
      this.getAllClubs();
      this.messageService.add({
        severity: 'success',
        summary: 'Club ajouté avec succès.',
      });
    } else {
      console.log('no');
    }
  }
  editClubCheck(data: any) {
    if (data) {
      this.getAllClubs();
      this.messageService.add({
        severity: 'success',
        summary: 'Club Modifié avec succès.',
      });
    } else {
      console.log('no');
    }
  }
  selectClub(data: any) {
    this.selectedClub = data;
  }

  deleteClub(media: any) {
    this.clubService.deleteClub(media.id).subscribe((res: any) => {
      console.log(res);
      this.getAllClubs();
      this.messageService.add({
        severity: 'success',
        summary: 'Club supprimé avec succès.',
      });
    });
  }
}
