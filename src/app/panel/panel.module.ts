import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FormsModule } from '@angular/forms';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentControlComponent } from './comment-control/comment-control.component';


@NgModule({
  declarations: [PostControlComponent, AllPostsComponent, AllCommentsComponent, CommentControlComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule
  ],
})
export class PanelModule { }
