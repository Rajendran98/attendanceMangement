import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit {
  
  varlues =[]
  pending=0;
  registered=0;
  public entries: object = [];
  displayedColumns: string[] = ['EmpId', 'Name', 'Shift', 'Designation', 'Department', 'Phone', 'Email', 'Status'];
  dataSource = this.entries;

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEntries();
   
  }

  getEntries() {

    this.http.get<object>(`${environment.BASE_URL}/company`)
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
      console.log('employee data ', typeof(data));
      console.log(data);
      this.entries = data;
      console.log(this.entries[length])
      this.dataSource = this.entries;
      console.log(this.displayedColumns);
      console.log(this.dataSource);

      function* entries(obj) {
        for (let key of Object.keys(obj)) {
          yield [key, obj[key]];
        }
     }
     
     for (let [key1, value1] of entries(this.entries)) {
     //  console.log(key1);
       //console.log(value1);
       for (let [key, value] of entries(value1)) {
        // console.log(key);
       //  console.log(value);
         if(key == 'status' && value == 'pending')
         {
            this.pending++
           
            console.log(this.pending)
         }
         if(key == 'status' && value == 'registered')
         {
            this.registered++
           
            console.log(this.registered)
         }
         
       }
     }

    });
  }

  upload() {
    this.router.navigate(['attendance/upload']);
  

   
  }

  goto() {
    this.router.navigate(['attendance/details']);
  }

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
