import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wificonnection',
  templateUrl: './wificonnection.component.html',
  styleUrls: ['./wificonnection.component.css']
})
export class WificonnectionComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['settings/network']);
    }
  }
}
