import { Component, OnInit ,Directive} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  panelOpenState = false;
  public ipaddress :string;
  public subnet :string;
  public gateway :string;
  public macaddress :string;
  public ipaddressftp :string;
  public port : string;
  public userid : string;
  public password : string;
  isChecked = true;
  temp = true;
  screening =true;
  public cluster_ip : string;
  public cluster_device : string;
  public cluster_userid : string;
  public cluster_password :string; 
  public access_macaddress : string[];
  public access_devicename : string[];
  public access_devicetype :string[];
  public access_userid : string[];
  public access_password : string[];
  AccessArray= [];
  ClusterArray= [];
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['settings']);
    }
  }

  opennetwork(){
    this.router.navigate(['settings/network'])
  }
  opendevice(){
    this.router.navigate(['settings/device/secqurin'])
  }
  openconfig(){
    this.router.navigate(['settings/configuration'])
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
 

  Access(accessForm : NgForm)
  {
    if(accessForm.valid)
    {
  
      this.AccessArray.push(accessForm.value)
      
      console.log(this.AccessArray)
      console.log(accessForm.value)
      
    }
  }
  onRemove(index)
  {

    this.AccessArray.splice(index, 1);
  }


  Cluster(clusterForm : NgForm){

    if(clusterForm.valid)
    {
        this.ClusterArray.push(clusterForm.value)
        console.log(this.ClusterArray)
    }

  }
  onRemoveCluster(index)
  {

    this.ClusterArray.splice(index, 1);
  }
}
