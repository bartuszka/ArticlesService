import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isLoggedIn();
    }
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isLoggedIn();
    }
}