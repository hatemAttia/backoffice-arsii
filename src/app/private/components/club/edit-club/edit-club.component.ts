import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss'],
})
export class EditClubComponent implements OnInit {
  @Output() customEvent = new EventEmitter<string>();

  @Input() club: any = {
    name: '',
    contact: '',
    description: '',
    logo: '',
    location: '',
    status: '',
  };
  ngOnChanges(changes: SimpleChanges): void {
    // Check for changes to the @Input property
    if (changes['inputData']) {
      const newValue = changes['inputData'].currentValue;
      const previousValue = changes['inputData'].previousValue;
      console.log(this.club);
      // Perform actions based on the changes
      console.log(`InputData changed from ${previousValue} to ${newValue}`);
    }
  }
  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    console.log(this.club);
  }

  emitEvent(data: any) {
    this.customEvent.emit(data);
  }

  updateClub() {
    this.clubService
      .editClub({ ...this.club, logo: this.selectedFile })
      .subscribe((res: any) => {
        console.log(res);
        this.emitEvent(true);
      });
  }

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
