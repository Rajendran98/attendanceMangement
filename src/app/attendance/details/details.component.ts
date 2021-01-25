import { Component, OnInit, ViewChild, Input,EventEmitter,Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { ProfileComponent } from './../profile/profile.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  values = [];
 
  public ELEMENT_DATA = [];
  
  public entries: object = [];

  @Output() redirect:EventEmitter<any> = new EventEmitter();


  displayedColumns: string[] = ['emp_id', 'name', 'enrollment', 'last_entry'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.getEntries();
  }


  getEntries() {
   
    this.http.get<object>(`${environment.BASE_URL}/employee`)
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
      
      console.log(data);

      this.entries = data;
      this.dataSource = new MatTableDataSource(<any>data);
      this.dataSource.paginator = this.paginator;
     console.log(this.dataSource);
      console.log(this.displayedColumns);
    });
  }


  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['attendance']);
    }
  }

  goto(id){
  
   this.router.navigate(['attendance/profile']);
    
    console.log(id)
    this.values = id;
    console.log(this.values)
    
  }

}
