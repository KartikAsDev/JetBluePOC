import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flightsList: any;
  // searchDate: string;
  // to: string;
  // from: string;
  searchCriteria: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.flightsList = this.dashboardService.fetchFlightList();
    this.searchCriteria = this.dashboardService.fetchSearchCriteria();
    console.log("this.searchCriteria", this.searchCriteria);
    // this.searchDate = searchCriteria.date;
    // this.from = searchCriteria.from;
    // this.to =  searchCriteria.to;
  }
}
