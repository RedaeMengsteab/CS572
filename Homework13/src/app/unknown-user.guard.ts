import { UserService } from './apiservice.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnknownUserGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.validUuid(next.params.uuid)){
     // console.log("valid");
      return true;
    }
    else{
      this.router.navigateByUrl('error');
      return false;
    }
    
      
  }
  private validUuid(uuid:string):boolean{
    const user=this.userService.getUserByUuid(uuid);
    return user?true:false;
  }
  
}
