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
      response.json();
      this.route.navigateByUrl('searchResults');
    })
    .subscribe((data) => {data});
  }

  fetchFlightList() {
    return this.flightsList;
  }

  updateSearchCriteria(searchCriteria) {
    this.searchCriteria = searchCriteria;
    console.log("This is Search Criteria", this.searchCriteria);
  } 

  fetchSearchCriteria() {
    console.log("This is search Criteria", this.searchCriteria);
    return this.searchCriteria;
  }
}
