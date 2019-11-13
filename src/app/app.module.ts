import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndependentComponent } from './independent/independent.component';
import { AdvisorComponent } from './advisor/advisor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndependentComponent,
    AdvisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
