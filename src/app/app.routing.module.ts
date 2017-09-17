import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { ArticlesComponent } from "./articles/articles.component";
import { BlogComponent } from "./blog/blog.component";
import { ArticleDetailsComponent } from "./articles/article-details/article-details.component";
import { ArticleEditComponent } from "./articles/article-edit/article-edit.component";
import { AuthGuardService } from "./shared/auth-guard.service";

const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'articles', component: ArticlesComponent,
    children:[
        { path: ':id', component: ArticleDetailsComponent },
        { path: ':id/edit', component: ArticleEditComponent, canActivate: [AuthGuardService] },
        { path: ':id/new', component: ArticleEditComponent, canActivate: [AuthGuardService] }
    ]
}
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