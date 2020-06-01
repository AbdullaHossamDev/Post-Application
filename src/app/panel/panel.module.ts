import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PostControlComponentComponent } from './post-control-component/post-control-component.component';
import { AllPostsComponentComponent } from './all-posts-component/all-posts-component.component';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';


@NgModule({
  declarations: [PostControlComponentComponent, AllPostsComponentComponent, PostControlComponent, AllPostsComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ],
})
export class PanelModule { }
