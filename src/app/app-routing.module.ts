import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { IndependentComponent } from './independent/independent.component'; // Add this
import { AdvisorComponent } from './advisor/advisor.component'; // Add this
import { LogSignInComponent } from './log-sign-in/log-sign-in.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0,64],
};




const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'home', component: HomeComponent },              // Add this
  { path: 'Independent', component: IndependentComponent },           // Add this
  { path: 'Advisor', component: AdvisorComponent }, 
  { path: 'log-sign-in', component: LogSignInComponent },          // Add this
  { path: 'register', component:RegisterComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'reports', component:ReportsComponent},
  {
    path: '',
    redirectTo: 'Independent',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }