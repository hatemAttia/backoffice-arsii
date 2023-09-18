import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormationsComponent } from './components/formations/formations.component';
import { AddFormationModalComponent } from './components/formations/add-formation-modal/add-formation-modal.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';

import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { UserService } from './components/services/user.service';

@NgModule({
  declarations: [
    BaseComponent,
    SidenavComponent,
    UserListComponent,
    FormationsComponent,
    AddFormationModalComponent,
    EventsComponent,
    EditEventComponent,
    AddEventComponent,

    ChangeInformationComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService],
})
export class PrivateModule {}
