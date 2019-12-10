import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-sign-in',
  templateUrl: './log-sign-in.component.html',
  styleUrls: ['./log-sign-in.component.scss']
})
export class LogSignInComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }
}
