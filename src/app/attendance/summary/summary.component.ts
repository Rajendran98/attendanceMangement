import { Component, OnInit, Input ,ViewChild} from '@angular/core';
import { timestamp } from 'rxjs/operators';
import { Location, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 // @Input() attendance;
 public ELEMENT_DATA = [];
 public entries: object = [];
 
 displayedColumns: string[] = ['date','time','empid', 'name','location','shift','temperature', 'mode'];
 dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAttednaceSummary();
    this.dataSource.sort = this.sort;
  
  }
  

  getAttednaceSummary() {
    this.ELEMENT_DATA = [];
   
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
      console.log(formatDate(date, 'HH:mm:ss', 'en-US')); 
     
     
     
     // console.log(this.ELEMENT_DATA.sort)
     //this.dataSource = this.entries
    
      this.dataSource = new MatTableDataSource(<any>data);
      console.log(this.dataSource)
      this.dataSource.sort = this.sort
      console.log(this.sort);
     
    });

  }
/*  formatTimeStamp() {
    console.log(this.attendance.timestamp);
    const date = new Date(this.attendance.timestamp);
    console.log(date.toISOString());
  }*/

  

}
