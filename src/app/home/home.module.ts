import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { NotifierModule } from 'angular-notifier';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { PendingdashboardComponent } from './pendingdashboard/pendingdashboard.component';
import { GeneralInfoComponent } from './general-info/general-info.component';


@NgModule({
  declarations: [  LoginComponent,
    DashboardComponent,
    PendinglistComponent,
    PendingdashboardComponent,
    GeneralInfoComponent
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
     NotifierModule
  
  ]
})
export class HomeModule { }
