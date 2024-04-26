import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  loginWithSpotify(): void {
    window.location.href = 'http://localhost:8089/oauth2/authorization/spotify';
  }
}
