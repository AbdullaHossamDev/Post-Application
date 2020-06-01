import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostControlComponent } from './post-control/post-control.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'posts/all', pathMatch: 'full'
  },
  {
    path: 'posts/all', component: AllPostsComponent
  },
  {
    path: 'posts/control/:id', component: PostControlComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }

