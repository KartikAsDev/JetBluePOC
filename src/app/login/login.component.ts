import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  @Output() usernameEvent = new EventEmitter<string>();

  constructor(private route: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    let user = {
      username: this.username,
      password: this.password
    }
    this.loginService.authenticate(user);
  }
}
