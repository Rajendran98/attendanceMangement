import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private router:Router, private authService: AuthService) { }




canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean|UrlTree {
  console.log("in");
if (this.authService.isUserLoggedIn()) {
return true;

//var urlTree = this.router.createUrlTree(['login']);
//return urlTree;
} 
else{
  this.router.navigate(['/login']);
  return false;

}


}
}
