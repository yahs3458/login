
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../service/auth.service.service';

@Injectable({
  providedIn: 'root',
})





export class AuthGuard implements CanActivate {
    // Istrue: boolean = true;
    // constructor(private router: Router,
    //   private authService: AuthService, ) { }
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): boolean {
    //   if (this.authService.isLoggedIn) {
    //   //   let letMenu = this.sessionStorage.getJsonParseValue(AdminConstants.LEFT_MENU_LOCAL_Storage_Key)
    //     let urlName = state.url.split('/')[2].toLocaleLowerCase();
  
    //   //   if (values.includes(urlName as unknown as Modulesenum)) {
    //   //     if (letMenu != undefined && letMenu != null) {
    //   //       let resLeftMenu = letMenu.allowedWorkspaces.filter(x => x.name.toLocaleLowerCase() == urlName);
    //   //       if (resLeftMenu.length == 0)
    //   //         this.Istrue = false;
    //   //     }
    //   //   }
    //   }
  
    //   return this.Istrue;
  
    // }
    constructor(private router: Router, private authService: AuthServiceService) {}
  
    canActivate(): boolean {
      const token = localStorage.getItem('token'); // Get the token from your storage
  
      if (token) {
        return true; // Allow navigation
      } else {
        this.router.navigate(['/login']); // Redirect to the login page
        return false; // Prevent navigation
      }
    }
  }