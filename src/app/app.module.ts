import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndependentComponent } from './independent/independent.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogSignInComponent } from './log-sign-in/log-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndependentComponent,
    AdvisorComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LogSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
