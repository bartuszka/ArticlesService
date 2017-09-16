import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    constructor(private router: Router){}

    token: string = null;

    login() {
        this.token = "12345";
        this.router.navigate(["/"]);
    }

    logout() {
        this.token = null;
        this.router.navigate(["/"]);
    }

    getToken(): string {
        return this.token;
    }

    isLoggedIn(): boolean {
        return this.token != null;
    }
}