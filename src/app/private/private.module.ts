import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { BaseComponent } from './components/base/base.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormationsComponent } from './components/formations/formations.component';
import { AddFormationModalComponent } from './components/formations/add-formation-modal/add-formation-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeInformationComponent } from './components/change-information/change-information.component';
import { UserService } from './components/user.service';
import { EventComponent } from './components/event/event.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    BaseComponent,
    SidenavComponent,
    UserListComponent,
    FormationsComponent,
    AddFormationModalComponent,
    ChangeInformationComponent,
    EventComponent,
    SkillsComponent
    
  ],
  imports: [CommonModule, PrivateRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [UserService],
})
export class PrivateModule {}
