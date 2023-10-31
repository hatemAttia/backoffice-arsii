import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.scss'],
})
export class AddClubComponent implements OnInit {
  newClub = {
    name: '',
    contact: '',
    description: '',
    logo: '',
    status: '',
    location: '',
  };
  @Output() customEvent = new EventEmitter<string>();

  constructor(private ClubService: ClubService) {}

  ngOnInit(): void {}

  emitEvent(data: any) {
    this.customEvent.emit(data);
  }

  addClub() {
    console.log(this.selectedFile);

    this.ClubService.addClub({
      ...this.newClub,
      logo: this.selectedFile,
    }).subscribe((res: any) => {
      console.log(res);
      this.emitEvent(true);
    });
  }

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
