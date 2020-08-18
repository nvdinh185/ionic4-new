import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ngxi4DynamicServiceModule } from 'ngxi4-dynamic-service'
import { Ngxi4SocketClientModule } from 'ngxi4-socket-client';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    Ngxi4DynamicServiceModule.forRoot(),
    Ngxi4SocketClientModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
