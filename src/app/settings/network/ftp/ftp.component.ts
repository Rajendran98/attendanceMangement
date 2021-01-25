import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ftp',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.css']
})
export class FtpComponent implements OnInit {


  public ipaddressftp :string;
  public port : string;
  public userid : string;
  public password : string;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClicking(ftpForm : NgForm)
  {
    if(ftpForm.valid)
    {
      console.log(ftpForm.value)
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
      this.router.navigate(['settings/network']);
    }
  }

}
