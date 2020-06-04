import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as postServ from '../../services/posts/index.service';
import * as userServ from '../../services/users/index.service';
import * as commentServ from '../../services/comments/index.service'
import * as saved_data from '../../services/saved-data/index.service';
@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit {

  postId: Number;
  post: any;
  comments: Array<any>;
  UsersList: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postServ: postServ.IndexService,
    private userServ: userServ.IndexService,
    private commentServ: commentServ.IndexService,
    private saved_data: saved_data.IndexService

  ) { }

  ngOnInit(): void {
    this.comments = [];
    this.activatedRoute.params.subscribe((params: any) => {
      this.postId = Number(params.id);
      if (this.postId == -1) {
        let user =  this.saved_data.lastLoggedUser()
        this.post = {
          title: '',
          body: '',
          user
        }
      } else {
        this.postServ.getPostById(this.postId).subscribe((data: any) => {
          this.post = data;
          this.post.user = this.userServ.getUser(this.post.userId)
        })
        this.commentServ.getComments(this.postId).subscribe((data: any) => {
          this.comments = data;
        })
      }
    })
  }

  updatePost(){
    let virtualPost = JSON.parse(JSON.stringify(this.post));
    delete virtualPost.user;
    this.postServ.patchPost(virtualPost)
  }

  addPost(){
    // should add this user id on the post 
    delete this.post.user;
    this.postServ.addPost(this.post);
  }

  delete(ind){
    let deletedComment = this.comments.splice(ind, 1);
    this.commentServ.deleteComment(deletedComment[0].id);
  }
}
