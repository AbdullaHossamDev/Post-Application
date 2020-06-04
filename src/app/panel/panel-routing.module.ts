import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostControlComponent } from './post-control/post-control.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'posts/all', pathMatch: 'full' },
      { path: 'posts', redirectTo: 'posts/all', pathMatch: 'full' },
      { path: 'posts/all', component: AllPostsComponent },
      { path: 'posts/control/:id', component: PostControlComponent },
      { path: 'comments', redirectTo: 'comments/all', pathMatch: 'full' },
      { path: 'comments/all', component: AllCommentsComponent },
      { path: 'comments/control/:id', component: CommentControlComponent },
      { path: 'user/:userId', component: AllPostsComponent },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }

