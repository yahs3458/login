import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PendinglistComponent } from './home/pendinglist/pendinglist.component';
import { PendingdashboardComponent } from './home/pendingdashboard/pendingdashboard.component';
import { GeneralInfoComponent } from './home/general-info/general-info.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'layout',
    data: { title: 'layout', viewMode: 'View' },
    component: LayoutComponent,
  },
  {
    path: 'layout',
    data: { title: 'layout', viewMode: 'View' },
    component: LayoutComponent,
  },
  {
    path: 'dashboard',
    data: { title: 'Dashboard', viewMode: 'View' },
    component: DashboardComponent,
  },
  {
    path: 'pending-list',
    data: { title: 'PendingList', viewMode: 'View' },
    component: PendinglistComponent,
  },
  {
    path: 'general-info',
    data: { title: 'General information', viewMode: 'View' },
    component:GeneralInfoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pendingDashboard',
    data: { title: 'PendingDashboard', viewMode: 'View' },
    component: PendingdashboardComponent,
  },
  {
    path: '**',
    redirectTo:'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
