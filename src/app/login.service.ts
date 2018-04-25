import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  flightsList: any;
  userData: any;
  constructor( private route: Router, private http: Http) { }

  authenticate(user) {
    this.userData= user;
    localStorage.setItem("UserName", JSON.stringify(user));
    this.route.navigateByUrl('dashboard');
  }

  fetchUserData() {
    return localStorage.getItem('UserName');
  }

  getSearchResults() {
    this.http.get('http://localhost:3000/flights')
    .map((response) => {
      this.flightsList = response.json();
      response.json();
      this.route.navigateByUrl('searchResults');
    })
    .subscribe((data) => {data});
  }

  fetchFlightList() {
    return this.flightsList;
  }
}
