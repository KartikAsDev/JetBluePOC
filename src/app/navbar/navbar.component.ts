import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  @Input() username: string;


  constructor(private route: Router  ) { }

  ngOnInit() {
  }

  navigateToRegister() {
    this.route.navigateByUrl('register');
  }

  navigateToLogin() {
    this.route.navigateByUrl('');
  }
}