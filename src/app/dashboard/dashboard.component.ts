import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


export class State {
  constructor(public name: string) { }
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  fromCtrl = new FormControl();
  toCtrl = new FormControl();

  username: string;
  todayDate: Date;
  date: Date = new Date();
  returnDate: Date = new Date();
  oneway: boolean = true;

  states: State[] = [{ name: 'Hyderabad' }, {name: 'Delhi'}, { name: 'Bangalore'}, { name: 'Chennai'}];
  passengers= [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]

  constructor( private loginService: LoginService, private dashboardService: DashboardService, private route: Router) {    this.todayDate = new Date();    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {

    this.date = new Date();
    this.returnDate = new Date();
  }

  setWayOption(Event) {
    console.log("this.oneway", this.oneway);
  }

  getSearchResults() {
    let searchCriteria = {
      from: this.fromCtrl.value,
      to: this.toCtrl.value,
      date: this.date
    }
    this.dashboardService.getSearchResults();
    this.dashboardService.updateSearchCriteria(searchCriteria);
  }
}
