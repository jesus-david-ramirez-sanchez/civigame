import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ContactComponent } from './single-page/contact/contact.component';
import { DinamicaComponent } from './single-page/dinamica/dinamica.component';
import { FunctionsComponent } from './single-page/functions/functions.component';
import { HeaderComponent } from './single-page/header/header.component';
import { PremiosComponent } from './single-page/premios/premios.component';
import { ViewComponent } from './view/view.component';
import { PasosComponent } from './single-page/pasos/pasos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'view', component: ViewComponent, data: { title: 'Galary Time' } },
  { path: 'single', component: SinglePageComponent, data: { title: 'CiviGame' } },
  { path: '', redirectTo: '/single', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ContactComponent,
    DinamicaComponent,
    FunctionsComponent,
    HeaderComponent,
    PremiosComponent,
    ViewComponent,
    PasosComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    ),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    BrowserModule,
    NgxMasonryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
