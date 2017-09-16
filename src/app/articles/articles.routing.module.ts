import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesComponent } from "./articles.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { ArticleEditComponent } from "./article-edit/article-edit.component";

const routes: Routes = [
    { path: 'articles', component: ArticlesComponent,
        children:[
            { path: ':id', component: ArticleDetailsComponent },
            { path: ':id/edit', component: ArticleEditComponent },
            { path: ':id/new', component: ArticleEditComponent }
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