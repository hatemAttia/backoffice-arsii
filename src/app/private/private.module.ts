import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormationsComponent } from './components/formations/formations.component';
import { AddFormationModalComponent } from './components/formations/add-formation-modal/add-formation-modal.component';

@NgModule({
  declarations: [
    BaseComponent,
    SidenavComponent,
    UserListComponent,
    FormationsComponent,
    AddFormationModalComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
})
export class PrivateModule {}
