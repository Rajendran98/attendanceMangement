import { Component, OnInit } from '@angular/core';
import { Location, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})


export class AttendanceReportComponent implements OnInit {

  public entries: object = [];
  displayedColumns: string[] = ['date','time','empid', 'name','location','shift','temperature'];
  dataSource = this.entries;

  

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAttednaceSummary();
  }

   getAttednaceSummary() {
    this.http.get<object>(`${environment.BASE_URL}/attendance`)
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
      console.log('attendance data ', typeof(data));
      console.log(data);
      const date = new Date(data[0].createdAt);
      console.log(date);
      console.log(formatDate(date, 'yyyy-MM-dd', 'en-US'));
      console.log(formatDate(date, 'HH:mm:SS', 'en-US'));
      this.entries = data;
      this.dataSource = this.entries;
      console.log(this.dataSource)
    });

  }

}
