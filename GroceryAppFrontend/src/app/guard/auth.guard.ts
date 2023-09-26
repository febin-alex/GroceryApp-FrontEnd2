import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({

  providedIn:'root'

})

export class authGuard implements CanActivate {

  constructor(private authService:AuthGuardService,private router:Router){}

 

  canActivate(): boolean {

    if(this.authService.checkToken()){

      return true;

    }else{

      this.router.navigateByUrl('login');

      return false;

    }

  }

};