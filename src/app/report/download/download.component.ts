import { Component, OnInit ,Inject} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  fromdate : Date;
  todate : Date;
  constructor( private location: Location,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['report']);
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(datepopup, {
      width: '400px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fromdate = result.data;
      this.todate = result.data1;

      console.log(this.fromdate)
    
    
    });
  }
}

@Component({
  selector: 'datepopup',
  templateUrl: 'datepopup.html',
})
export class datepopup {

  fromdate :Date
  todate : Date
  constructor(
    public dialogRef: MatDialogRef<datepopup>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  



  onsubmit(popupForm : NgForm){
    if(popupForm.valid){
    console.log(popupForm.value)
    
    this.dialogRef.close({ event: 'close', data: this.fromdate ,data1 : this.todate});
    }
  }

}
