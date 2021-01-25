import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  public headerFlag = false;
  element: HTMLElement;

  constructor(
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
    console.log('logout');
  }

}
