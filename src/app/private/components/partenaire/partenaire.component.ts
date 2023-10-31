import { Component, OnInit } from '@angular/core';
import { Popover } from 'bootstrap';
import { MemberService } from '../services/member.service';
import { MessageService } from 'primeng/api';
import { PartenaireService } from '../services/partenaire.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss'],
})
export class PartenairesComponent implements OnInit {
  partenaire: any[] = [];
  selectedPartenaire = {
    urlPost: '',
    description: '',
    image: '',
    title: '',
    type: '',
  };
  currentRole: any;
  constructor(
    private partenaireService: PartenaireService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentRole = this.authService.getUserLoginedStore().role;

    Array.from(document.querySelectorAll('a[data-toggle="popover"]')).forEach(
      (popverMode) => new Popover(popverMode)
    );
    this.getAllPartenaire();
  }

  private getAllPartenaire() {
    this.partenaireService.getPartenaire().subscribe((data: any) => {
      console.log('data', data);
      this.partenaire = data;
    });
  }
  goToEditPage() {}

  addmediaCheck(data: any) {
    if (data) {
      this.getAllPartenaire();
      this.messageService.add({
        severity: 'success',
        summary: 'Partenaire ajoutée avec succès.',
      });
    } else {
      console.log('no');
    }
  }
  editmediaCheck(data: any) {
    if (data) {
      this.getAllPartenaire();
      this.messageService.add({
        severity: 'success',
        summary: 'Partenaire Modifiée avec succès.',
      });
    } else {
      console.log('no');
    }
  }
  selectPartenaire(data: any) {
    this.selectedPartenaire = data;
  }

  deletePartenaire(media: any) {
    this.partenaireService.deletePartenaire(media.id).subscribe((res: any) => {
      console.log(res);
      this.getAllPartenaire();
      this.messageService.add({
        severity: 'success',
        summary: 'Partenaire supprimée avec succès.',
      });
    });
  }
}
