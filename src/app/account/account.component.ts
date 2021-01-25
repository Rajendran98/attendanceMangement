import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public device: string;
  public name: string;
  public organization : string;
  public mobile: number;
  public email: string;
  public password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  public onClicking(accountForm: NgForm)
  {
   
    if(accountForm.valid)
    {
      this.router.navigate(['login']);
    }
    else
    {
      return;
    }

  }
}
