import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ArticlesComponent } from "./articles/articles.component";
import { BlogComponent } from "./blog/blog.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'login', component: LoginPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}