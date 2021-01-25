import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Form, FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../service/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retUrl = 'attendance/report';
  public hide = true;
  errorMsg: any;
  loginForm: FormGroup;
  pwdForm: FormGroup;
  loginPg = true;
  public WelcomeMsg;
  matcher = new MyErrorStateMatcher();

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin(form: Form) {
    if (form['username'] !== '' && form['password'] !== '') {

      this.errorMsg = false;
      const user = {
        username: form['username'].toLowerCase(),
        password: form['password']
      };
      console.log(user);
      this.authService.login(user).subscribe(data => {
        console.log( 'return to ' + this.retUrl);
        if (this.retUrl != null) {
             this.router.navigate( [this.retUrl]);
             console.log('login');
        } else {
          this.router.navigate(['login']);
          console.log('logout');
        }
      });
    }

  }
}
