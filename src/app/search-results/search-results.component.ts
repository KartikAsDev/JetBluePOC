import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  flightsList: any;
  searchData: any;
  searchDate: any;
  localFlightList: any;
  selectedFlight: Array<Object> = [];
  flightSelected: boolean = false;

  constructor(private dashboardService: DashboardService) {
    this.flightsList = this.dashboardService.fetchFlightList();
  }

  displayedColumns = ['flightNumber', 'departure', 'arrival', 'duration', 'price', 'check'];
  selectDisplayedColumnns = ['flightNumber', 'departure', 'arrival', 'duration', 'price'];
  dataSource;
  matSelectItems;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterView() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.flightsList = this.dashboardService.fetchFlightList();
    this.dataSource = new MatTableDataSource(JSON.parse(this.flightsList));
    let searchCriteria = this.dashboardService.fetchSearchCriteria();
    this.searchData = JSON.parse(searchCriteria);
    this.searchDate = this.searchData.date.substring(0, 16);
  }

  selectItem(item, $event) {
    if ($event.target.childNodes[0].checked == false) {
      this.selectedFlight.push(item);
      this.matSelectItems = new MatTableDataSource(this.selectedFlight);
      this.flightSelected = true;
    } else {
      let index = this.selectedFlight.indexOf(item);
      this.selectedFlight.splice(index, 1);
      this.matSelectItems = new MatTableDataSource(this.selectedFlight);
      this.flightSelected = true;
    }
  }

  proceedToPayment() { }

}
