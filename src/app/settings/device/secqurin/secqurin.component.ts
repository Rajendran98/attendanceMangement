import { Component, OnInit ,Inject} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-secqurin',
  templateUrl: './secqurin.component.html',
  styleUrls: ['./secqurin.component.css']
})
export class SecqurinComponent implements OnInit {

  ClusterArrays : any = [];

  constructor(private location: Location,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  adddevice(): void {
    const dialogRef = this.dialog.open(addsecqurin, {
      width: '800px'
,
      data: { }
    });

   dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ClusterArrays.push(result.data);
      console.log(this.ClusterArrays)

    
    
    });
  
    
  }

  onRemoveCluster(index)
  {

    console.log(index);
    this.ClusterArrays.pop(index);
  }
  goBack() {
    
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['settings']);
    }

    //console.log(this.ClusterArrays)

  }


}



@Component({
  selector: 'addsecqurin',
  templateUrl: 'addsecqurin.html',
})
export class addsecqurin {
   public cluster_ip;
    public cluster_device;
   public cluster_userid;
   public cluster_password; 
   ClusterArray :any = [];
  
  constructor(
    public dialogRef: MatDialogRef<addsecqurin>,
    @Inject(MAT_DIALOG_DATA) private data: []) {}

    ngOnInit(): void {
  
    }



    Cluster(clusterForm : NgForm){
    if(clusterForm.valid){
    //console.log(clusterForm.value)
    this.ClusterArray.push(clusterForm.value)
   // console.log(this.ClusterArray)
    this.dialogRef.close({  data : clusterForm.value});
    //this.ClusterArray=this.ClusterArray;
   
    }
  }

}

