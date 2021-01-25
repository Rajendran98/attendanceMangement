import { Component, OnInit ,Inject} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  ClusterArray= [];

  constructor(
    private location: Location,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  adddevice(): void {
    const dialogRef = this.dialog.open(addaccess, {
      width: '400px',
      data: { }
    });

   dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     this.ClusterArray=result.data;
      console.log(this.ClusterArray)

    
    
    });
  
    
  }

  onRemoveCluster(index)
  {

    this.ClusterArray.splice(index, 1);
  }
  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['settings/device']);
    }
  }


}


@Component({
  selector: 'addaccess',
  templateUrl: 'addaccess.html',
})
export class addaccess {

 access_macaddress : string[];
  access_devicename : string[];
   access_devicetype :string[];
   access_location :string[];
   ClusterArray= [];
  
  constructor(
    public dialogRef: MatDialogRef<addaccess>,
    @Inject(MAT_DIALOG_DATA) private data: []) {}

    ngOnInit(): void {
  
    }



    Access(accessForm : NgForm){
    if(accessForm.valid){
    //console.log(clusterForm.value)
    this.ClusterArray.push(accessForm.value)
    console.log(this.ClusterArray)
    this.dialogRef.close({  data : this.ClusterArray});
    this.ClusterArray=this.ClusterArray;
   
    }
  }

}

