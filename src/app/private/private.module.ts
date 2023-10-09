import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './components/skills/skills.component';

import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { UserService } from './components/services/user.service';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { EditUserComponent } from './components/user-list/edit-user/edit-user.component';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';

@NgModule({
  declarations: [
    BaseComponent,
    SidenavComponent,
    UserListComponent,
    EventsComponent,
    EditEventComponent,
    AddEventComponent,
    ChangeInformationComponent,
    SkillsComponent,
    EditUserComponent,
    AddUserComponent,
    EventDetailsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class PrivateModule {}
