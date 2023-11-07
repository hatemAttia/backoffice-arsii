import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EventService } from '../../services/event.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit, OnChanges {
  @Input() event: any = {};
  @Input() reserved?: any = false;
  ngOnChanges(changes: SimpleChanges): void {
    // Check for changes to the @Input property
    if (changes['inputData']) {
      const newValue = changes['inputData'].currentValue;
      const previousValue = changes['inputData'].previousValue;
      console.log(this.event);
      // Perform actions based on the changes
      this.event = newValue;
      console.log(`InputData changed from ${previousValue} to ${newValue}`);
    }
  }
  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  reservationEvent() {
    const user = this.authService.getCurrentUser();
    if (this.event.numberOfParticipants <= this.event.maxOfParticipants) {
      this.eventService
        .reservationEvent({
          eventId: this.event.id,
          userId: user.id,
        })
        .subscribe(
          (res) => {
            console.log(res);
            this.messageService.add({
              severity: 'success',
              summary: 'votre réservation a été enregistrée avec succès',
              // detail: 'réservation a été enregistrée avec succès',
            });
          },
          (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'déja inscrit',
              // detail: 'réservation a été enregistrée avec succès',
            });
          }
        );
    }
  }

  ngOnInit(): void {}
}
