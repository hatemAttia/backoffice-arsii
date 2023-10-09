import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  eventId: number;
  event: any = {}

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.getEventById(this.eventId)
  }

  private getEventById(eventId: number) {
    this.eventService.getEventById(eventId).subscribe((data) => {
      let date_only = data.date.split('T')[0];
      data.date = date_only
      this.event = data;
    })
  }

  updateEvent(eventData: any) {
    this.eventService.updateEvent(this.eventId, {...eventData, date: new Date(eventData.date)}).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/private/events']);
    })
  }

  goBack() {
    this.router.navigate(['/private/events']);
  }

}
