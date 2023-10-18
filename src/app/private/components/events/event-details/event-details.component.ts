import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @Input() event: any = {};
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
  constructor() {}

  ngOnInit(): void {}
}
