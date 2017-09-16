import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog.routing.module';
import { BlogMessageComponent } from './blog-message/blog-message.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, BlogMessageComponent]
})
export class BlogModule { }
