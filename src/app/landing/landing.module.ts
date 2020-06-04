import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { FormsModule } from '@angular/forms';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostViewComponent } from './post-view/post-view.component';


@NgModule({
  declarations: [AllPostsComponent, PostViewComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule
  ]
})
export class LandingModule { }
