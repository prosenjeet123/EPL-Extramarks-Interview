import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavComponent } from './shared/left-nav/left-nav.component';
import { HomeScreenComponent } from './home/home-screen/home-screen.component';
import { ModelPopupComponent } from './shared/model-popup/model-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
    HomeScreenComponent,
    ModelPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
