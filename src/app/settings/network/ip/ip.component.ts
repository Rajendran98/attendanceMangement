import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {


  public ipaddress :string;
  public subnet :string;
  public gateway :string;
  public macaddress :string;
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
      this.router.navigate(['settings/network']);
    }
  }

}
