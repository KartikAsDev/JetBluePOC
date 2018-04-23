import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  oneway: boolean = false;
  twoway: boolean = true;
  username: string;
  todayDate: Date;
  from: string;
  to: string;
  date: string;

  constructor(
    private loginService: LoginService,
    private dashboardService: DashboardService,
    private route: Router
  ) {
    this.todayDate = new Date();
  }

  ngOnInit() {
  }

  letsCheck() {

  }

  setOneWayOption($event) {
    this.oneway = true;
    this.twoway = false;
  }

  setTwoWayOption() {
    this.oneway = false;
    this.twoway = true;
  }

  getSearchResults() {
    let searchCriteria = {
      from: this.from,
      to: this.to,
      date: this.date
    }
    this.dashboardService.getSearchResults();
    this.dashboardService.updateSearchCriteria(searchCriteria);
  }
}
