import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 
  public file : File;
  fileToUpload: File;
  data;
  constructor(
    private location: Location,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

//<<<<<<< HEAD
  submit(){

  if(this.fileToUpload == null){
    alert("File not uploaded")
  }
  else{
   
    
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this.http.post(`${environment.BASE_URL}/upload/employee`, formData).subscribe((val) => {
    
    this.data = val;
    console.log(val);
    });
    return false; 
  
  }
   
  }


 /* postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    alert("Upload :"+this.fileToUpload.name)
//=======
  submit() {
    if (this.data == null) {
      alert('File not uploaded');
    } else {
      console.log(this.data);
    }
  }*/


  postMethod(files: FileList) {
    this.fileToUpload = files.item(0);
   /* let formData = new FormData();
    formData.append('files', this.fileToUpload, this.fileToUpload.name);
    this.http.post(`${environment.BASE_URL}/upload/employee`, formData).subscribe((val) => {

    this.data = val;
    console.log(val);
    });
    return false;*/
//>>>>>>> 5c552e5be9de193b8b12581a89e69bc8059f249b
    }


  goBack() {
    if (window.history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

}
