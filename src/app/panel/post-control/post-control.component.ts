import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as postServ from '../../services/posts/index.service';
import * as userServ from '../../services/users/index.service';
import * as commentServ from '../../services/comments/index.service'

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit {

  postId: Number;
  post: any;
  comments: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postServ: postServ.IndexService,
    private userServ: userServ.IndexService,
    private commentServ: commentServ.IndexService

  ) { }

  ngOnInit(): void {
    this.comments = [];
    this.activatedRoute.params.subscribe((params: any) =>{
      this.postId = Number(params.id);
      this.postServ.getPostById(this.postId).subscribe((data: any) => {
        this.post = data;
        this.post.user = this.userServ.getUser(this.post.userId)
      })
      this.commentServ.getComments(this.postId).subscribe((data: any) => {
        this.comments = data; 
      })
    })
  }

}
