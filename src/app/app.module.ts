import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndependentComponent } from './independent/independent.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogSignInComponent } from './log-sign-in/log-sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { CreateReportComponent } from './create-report/create-report.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndependentComponent,
    AdvisorComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LogSignInComponent,
    RegisterComponent,
    ReportsComponent,
    ForgotEmailComponent,
    VerifyEmailComponent,
    CreateReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



