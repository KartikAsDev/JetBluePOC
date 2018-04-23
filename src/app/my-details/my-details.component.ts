import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor(private route: Router) {

  }

  ngOnInit() {
  }

  registerMe() {
      this.route.navigateByUrl('dashboard');
  }
}
