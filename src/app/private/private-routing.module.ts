import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormationsComponent } from './components/formations/formations.component';
import { EventsComponent } from './components/events/events.component';
import { EditEventComponent } from './components/events/edit-event/edit-event.component';
import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { SkillsComponent } from './components/skills/skills.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'user-list',
        component: UserListComponent,
      },
      {
        path: 'formations',
        component: FormationsComponent,
      },
      {
        path: 'opportunity',
        component: OpportunityComponent,
      },
      {
        path: 'admin',
        component: FormationsComponent,
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
        path: 'change',
        component: ChangeInformationComponent,
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
