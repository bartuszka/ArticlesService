import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageModule } from './main-page/main-page.module';
import { AppRoutingModule } from './app.routing.module';
import { LoginPageModule } from './login-page/login-page.module';
import { ArticlesModule } from './articles/articles.module';
import { BlogModule } from './blog/blog.module';
import { MessageDetailsComponent } from './messages/message-details/message-details.component';
import { WriteMessageComponent } from './messages/write-message/write-message.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageDetailsComponent,
    WriteMessageComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MainPageModule,
    AppRoutingModule,
    LoginPageModule,
    ArticlesModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }