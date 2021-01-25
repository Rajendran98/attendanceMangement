import { Component, OnInit, Input, ViewChild ,AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit , AfterViewInit{

 

  @ViewChild(DetailsComponent) sala;
  

  public entries: object = [];
  

 

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  datas = [];

  ngAfterViewInit() {
    this.datas = this.sala.values
    console.log(this.datas)
  }
  ngOnInit(): void {
    this.getEntries();
    

 //  console.log(this.data)
  }

  getEntries() {
    this.http.get<object>(`${environment.BASE_URL}/employee`)
    .pipe(
      retry(3)
    )
    .subscribe((data) => {
    //  console.log('attendance data ', typeof(data));
      console.log(data);
      this.entries = data;
     
    });
  }  


  goBack1(){
    console.log(this.entries)
  //  console.log(this.data)
  }
  

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['attendance/details']);
    }
  }

}
