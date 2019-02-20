import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let x=Math.random()
    if(x >= 0.5)
    {      
      alert('You dont have permission '+x);
      this.router.navigate(['/']);
      return false;
    }
    return true;
   
  }
  constructor( private router:Router) {    
   }
}
