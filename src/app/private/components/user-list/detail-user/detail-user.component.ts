import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  @Input() user: any;
  constructor() {}

  ngOnInit(): void {}
  openPdf(cv: any) {
    window.open('/api/arsii/file/PDF/' + cv, '_blank');
  }
}
