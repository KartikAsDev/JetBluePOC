import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flightsList: any;
  searchDate: string;
  searchCriteria: any;

  constructor(private dashboardService: DashboardService) { }

  displayedColumns = ['flightNumber', 'departure', 'arrival', 'duration', 'price'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterView() {
    this.dataSource.sort = this.sort;
  }
  
  ngOnInit() {
    this.flightsList = this.dashboardService.fetchFlightList();
    this.dataSource = new MatTableDataSource(this.flightsList);
    this.searchCriteria = this.dashboardService.fetchSearchCriteria();
    this.searchDate =  this.searchCriteria.date != undefined ? this.searchCriteria.date.toString().substring(0,16) : new Date();
  }
}
