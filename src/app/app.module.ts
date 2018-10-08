import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ContactComponent } from './single-page/contact/contact.component';
import { DinamicaComponent } from './single-page/dinamica/dinamica.component';
import { FunctionsComponent } from './single-page/functions/functions.component';
import { HeaderComponent } from './single-page/header/header.component';
import { PremiosComponent } from './single-page/premios/premios.component';
import { VideoComponent } from './video/video.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ContactComponent,
    DinamicaComponent,
    FunctionsComponent,
    HeaderComponent,
    PremiosComponent,
    VideoComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
