import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageModule } from './main-page/main-page.module';
import { AppRoutingModule } from './app.routing.module';
import { MessageDetailsComponent } from './messages/message-details/message-details.component';
import { WriteMessageComponent } from './messages/write-message/write-message.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';

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
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }