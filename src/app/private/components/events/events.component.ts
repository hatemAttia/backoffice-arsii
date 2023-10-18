import { EventService } from '../services/event.service';
import { Popover } from 'bootstrap';
import { Component, OnInit } from '@angular/core';
import { Event } from 'interfaces/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: any = null;
  selectedType = '';
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.getAllEvents(null);

    Array.from(document.querySelectorAll('a[data-toggle="popover"]')).forEach(
      (popverMode) => new Popover(popverMode)
    );
  }

  getAllEvents(type: string | null) {
    this.eventService.getAllEvents(type).subscribe((data) => {
      this.events = data;
    });
  }

  goToAddEvent() {
    this.router.navigate(['/private/addEvent']);
  }

  goToEditPage(eventId: number | undefined) {
    if (eventId != undefined) {
      this.router.navigate(['/private/events', eventId]);
    }
  }

  deleteEvent(eventId: number | undefined) {
    console.log('eventId', eventId);
    if (eventId != undefined) {
      this.eventService.deleteEvent(eventId).subscribe((data) => {
        this.getAllEvents(null);
      });
    }
  }
}
