import { EventService } from '../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'interfaces/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  newEvent: any = {};

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(eventData: Event) {
    this.eventService
      .addEvent({
        ...eventData,
        date: new Date(eventData.date),
        maxOfParticipants: Number(eventData.maxOfParticipants),
        price: Number(eventData.price),
        image: this.selectedFile,
      })
      .subscribe((response) => {
        console.log('response', response);
        if (response) {
          this.router.navigate(['/private/events']);
        }
      });
  }

  goBack() {
    this.router.navigate(['/private/events']);
  }

  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
