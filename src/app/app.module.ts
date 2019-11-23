import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';
//import { AuthenticationService } from './services/auth.service';


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
import { environment } from '../environments/environment';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

var config = {
  apiKey: "AIzaSyBo1bctDWUXDxnv-EgI_I8fIGOWp5iFUhc",
  authDomain: "portvisual-ad5ae.firebaseapp.com",
  databaseURL: "https://portvisual-ad5ae.firebaseio.com",
  projectId: "portvisual-ad5ae",
  storageBucket: "portvisual-ad5ae.appspot.com",
  messagingSenderId: "128268155892",
  appId: "1:128268155892:web:9b969a6dcc022b142357a1",
  measurementId: "G-429YWYTC0S"
};




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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



