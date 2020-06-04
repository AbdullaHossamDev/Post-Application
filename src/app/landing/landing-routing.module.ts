import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'posts/all', pathMatch: 'full'
  },
  {
    path: 'posts/all', component: AllPostsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

