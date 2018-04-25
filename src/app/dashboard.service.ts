import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class DashboardService {

  flightsList: any;
  searchCriteria: any;

  constructor(private http: Http, private route: Router) { }

  getSearchResults() {
    this.http.get('http://localhost:3000/flights')
    .map((response) => {
      this.flightsList = response.json();
      localStorage.setItem('flightList', JSON.stringify(this.flightsList));
      response.json();
      this.route.navigateByUrl('searchResults');
    })
    .subscribe((data) => {data});
  }

  fetchFlightList() {
    return localStorage.getItem('flightList');
  }

  updateSearchCriteria(searchCriteria) {
    this.searchCriteria = searchCriteria;
    localStorage.setItem('searchCriteria', JSON.stringify(this.searchCriteria));
  } 

  fetchSearchCriteria() {
    return localStorage.getItem('searchCriteria');
  }
}
