import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent
  ],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
})
export class PrivateModule {}
