import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesComponent } from "./articles.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";
import { AuthGuardService } from "../shared/auth-guard.service";

const routes: Routes = [
    { path: '', component: ArticlesComponent,
        children:[
            { path: ':id', component: ArticleDetailsComponent },
            { path: ':id/edit', component: ArticleEditComponent, canActivate: [AuthGuardService] },
            { path: ':id/new', component: ArticleEditComponent, canActivate: [AuthGuardService] }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule 
    ]
})
export class ArticlesRoutingModule {}