import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  public network = "ON"
  public identity = '';
  // private BASE_URL = '';
  private BASE_URL = 'http://192.168.43.122:7000';

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getIdentity();
  }

  getIdentity() {
    this.http.get(`${environment.BASE_URL}/whoami`, {responseType: 'text'})
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
      this.identity = data.toString();
    });
  }

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}
