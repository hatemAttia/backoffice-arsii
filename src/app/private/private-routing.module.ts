import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormationsComponent } from './components/formations/formations.component';
import { ChangeInformationComponent } from './components/change-information/change-information.component';

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
      path: 'formations',
      component: FormationsComponent
     },
     {
     path: 'admin',
     component: FormationsComponent
    },
    {
      path: 'change',
      component: ChangeInformationComponent
     },
     {
      path: '**',
      redirectTo: '',
    },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
