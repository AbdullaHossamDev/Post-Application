import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';


@NgModule({
  declarations: [PostControlComponent, AllPostsComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ],
})
export class PanelModule { }
