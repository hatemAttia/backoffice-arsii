import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.scss'],
})
export class SkillsModalComponent implements OnInit {
  constructor(public ref: DynamicDialogRef, private router: Router) {}

  ngOnInit(): void {}

  close() {
    setTimeout(() => {
      this.ref.close();
    }, 500);
    this.router.navigate(['/private/change']);
  }
}
