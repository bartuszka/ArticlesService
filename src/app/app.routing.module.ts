import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
//import { LoginPageComponent } from "./login-page/login-page.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'login', loadChildren: './login-page/login-page.module#LoginPageModule' },
    { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule' },
    { path: 'blog', loadChildren: './blog/blog.module#BlogModule' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}