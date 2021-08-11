import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';
import { ErrorMsgComponent } from './compatilhado/error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
