import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flightsList: any;
  searchDate: string;
  // to: string;
  // from: string;
  searchCriteria: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.flightsList = this.dashboardService.fetchFlightList();
    this.searchCriteria = this.dashboardService.fetchSearchCriteria();
    this.searchDate =  this.searchCriteria.date != undefined ? this.searchCriteria.date.toString().substring(0,16) : new Date();
  }
}
