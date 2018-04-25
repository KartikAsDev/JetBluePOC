import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {MatTableDataSource, MatSort} from '@angular/material';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flightsList: any;
  searchDate: string;
  searchCriteria: any;
  localFlightList: any;

  constructor(private dashboardService: DashboardService, public local: LocalStorageService) { }

  displayedColumns = ['flightNumber', 'departure', 'arrival', 'duration', 'price'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterView() {
    this.dataSource.sort = this.sort;
  }
  
  ngOnInit() {
    this.flightsList = this.dashboardService.fetchFlightList();
    this.dataSource = new MatTableDataSource(this.flightsList);
    this.local.set(this.localFlightList, this.flightsList);
    console.log("safsafas", this.local.get(this.localFlightList));
    this.searchCriteria = this.dashboardService.fetchSearchCriteria();
    this.searchDate =  this.searchCriteria.date != undefined ? this.searchCriteria.date.toString().substring(0,16) : new Date();
  }
}
