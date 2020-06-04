import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FormsModule } from '@angular/forms';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PostControlComponent, AllPostsComponent, AllCommentsComponent, CommentControlComponent, DashboardComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    RouterModule
  ],
})
export class PanelModule { }
