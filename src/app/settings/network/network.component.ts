import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  public ipaddress :string;
  public subnet :string;
  public gateway :string;
  public macaddress = "122.35.22.2"

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

  openwifi(){
    this.router.navigate(['settings/network/wificonnection'])
  }
  openip(){
    this.router.navigate(['settings/network/ip'])
  }
  openftp(){
    this.router.navigate(['settings/network/ftp'])
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
