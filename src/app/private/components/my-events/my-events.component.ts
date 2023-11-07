import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Popover } from 'bootstrap';
import { Event } from 'interfaces/event';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss'],
})
export class MyEventsComponent implements OnInit {
  events: any[] = [];
  selectedEvent: any = null;
  selectedType = '';
  currentRole: any;
  user: any;
  constructor(
    private eventService: EventService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.getAllEvents(null);
    this.currentRole = this.authService.getUserLoginedStore().role;
    Array.from(document.querySelectorAll('a[data-toggle="popover"]')).forEach(
      (popverMode) => new Popover(popverMode)
    );
  }

  getAllEvents(type: string | null) {
    this.eventService.getMyEvents(this.user.id).subscribe((data) => {
      this.events = data;
    });
  }
}
