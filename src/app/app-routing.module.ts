import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
      path: 'video',
      component: VideoComponent
    },
    {
      path: 'view',
      component: ViewComponent
    },
    {
      path: 'single',
      component: SinglePageComponent
    },
    {
      path: '',
      redirectTo: '/single',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
