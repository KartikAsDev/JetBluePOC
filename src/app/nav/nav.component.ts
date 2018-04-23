import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username: string;
  constructor( private route: Router, private loginService: LoginService) { }

  ngOnInit() {
    let userData = this.loginService.fetchUserData();
    this.username = userData.username;
  }

  logOff() {
    this.route.navigateByUrl('')
  }
  
  navigateToDash() {
    this.route.navigateByUrl('dashboard')
  }
}
