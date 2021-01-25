import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'SecqurIn Admin';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAttendance() {
    this.router.navigate(['/attendance']);
  }

  gotoSettings() {
    this.router.navigate(['/settings']);
  }

  gotoWhoAmI() {
    this.router.navigate(['/whoami']);
  }

}
