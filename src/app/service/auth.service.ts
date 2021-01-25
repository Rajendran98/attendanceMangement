import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private isloggedIn: boolean;
  constructor() {
    this.isloggedIn = false;
   }
   login(user) {
    this.isloggedIn = true;
    return of(this.isloggedIn);
}

isUserLoggedIn(): boolean {
    return true; //this.isloggedIn;
}

logoutUser(): void {
    this.isloggedIn = false;
}



}
