import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CONTENT_ROUTE } from './shared/routes/content-routes.route';
import { ContentLayoutComponent } from './layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
