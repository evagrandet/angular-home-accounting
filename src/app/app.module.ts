import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SystemModule } from './system/system.module';
import { SystemRoutingModule } from './system/system-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    SystemModule,
    SystemRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
