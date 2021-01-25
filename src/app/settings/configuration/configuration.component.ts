import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

 
  
  public  temperature = "ON";
  public  measure="F";
  public authorized = "ON";
  public attendance_config="exit";
  public abnormal="ON";
  public periods = 14;
  public alert_respondent;
  public usage = "Attendance";
  public access = "ON";
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClicking(ipForm : NgForm)
  {
    if(ipForm.valid)
    {
      console.log(ipForm.value)
    }
    else
    {
      return
    }
  }

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['settings']);
    }
  }

}
