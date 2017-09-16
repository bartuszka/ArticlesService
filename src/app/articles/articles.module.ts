import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesRoutingModule } from './articles.routing.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [ArticlesComponent, ArticlesListComponent, ArticleDetailsComponent, ArticleEditComponent]
})
export class ArticlesModule { }
