import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { IndependentComponent } from './independent/independent.component'; // Add this
import { AdvisorComponent } from './advisor/advisor.component'; // Add this


const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'Independent', component: IndependentComponent },           // Add this
  { path: 'Advisor', component: AdvisorComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }