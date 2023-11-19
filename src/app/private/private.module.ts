import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { MemberService } from './components/services/member.service';
import { SkillsComponent } from './components/skills/skills.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { AddOpportunityComponent } from './components/opportunity/add-opportunity/add-opportunity.component';
import { EditOpportunityComponent } from './components/opportunity/edit-opportunity/edit-opportunity.component';
import { AddMediaComponent } from './components/medias/add-media/add-media.component';
import { EditMediaComponent } from './components/medias/edit-media/edit-media.component';
import { MediasComponent } from './components/medias/medias.component';
import { EditUserComponent } from './components/user-list/edit-user/edit-user.component';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EditPartenaireComponent } from './components/partenaire/edit-partenaire/edit-partenaire.component';
import { AddPartenaireComponent } from './components/partenaire/add-partenaire/add.partenaire.component';
import { PartenairesComponent } from './components/partenaire/partenaire.component';
import { PaginatorModule } from 'primeng/paginator';
import { ClubComponent } from './components/club/club.component';
import { AddClubComponent } from './components/club/add-club/add-club.component';
import { EditClubComponent } from './components/club/edit-club/edit-club.component';
import { DetailUserComponent } from './components/user-list/detail-user/detail-user.component';
import { MyEventsComponent } from './components/my-events/my-events.component';

import { CalendarModule } from 'primeng/calendar';
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
    OpportunityComponent,
    AddOpportunityComponent,
    EditOpportunityComponent,
    AddMediaComponent,
    MediasComponent,
    EditMediaComponent,
    EditUserComponent,
    AddUserComponent,
    EventDetailsComponent,
    EditPartenaireComponent,
    AddPartenaireComponent,
    PartenairesComponent,
    ClubComponent,
    AddClubComponent,
    EditClubComponent,
    DetailUserComponent,
    MyEventsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    PaginatorModule,
  ],
  providers: [MemberService],
})
export class PrivateModule {}
