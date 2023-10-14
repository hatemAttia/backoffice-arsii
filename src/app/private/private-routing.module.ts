import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { SkillsComponent } from './components/skills/skills.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { MediasComponent } from './components/medias/medias.component';

import { EditUserComponent } from './components/user-list/edit-user/edit-user.component';
import { AddUserComponent } from './components/user-list/add-user/add-user.component';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { PartenairesComponent } from './components/partenaire/partenaire.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
      },
      {
        path: 'media',
        component: MediasComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'events/:id',
        component: EditEventComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'opportunity',
        component: OpportunityComponent,
      },
      {
        path: 'change',
        component: ChangeInformationComponent,
      },
      {
        path: 'addUser',
        component: AddUserComponent,
      },
      {
        path: 'editUser/:id',
        component: EditUserComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'addEvent',
        component: AddEventComponent,
      },
      {
        path: 'partenaire',
        component: PartenairesComponent,
      },
      {
        path: '**',
        redirectTo: 'events',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
