import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as commentServ from '../../services/comments/index.service'
import * as saved_data from '../../services/saved-data/index.service'

@Component({
  selector: 'app-comment-control',
  templateUrl: './comment-control.component.html',
  styleUrls: ['./comment-control.component.css']
})
export class CommentControlComponent implements OnInit {

  commentId: Number;
  comment: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentServ: commentServ.IndexService,
    private saved_data: saved_data.IndexService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) =>{
      this.commentId = Number(params.id);
      if(this.commentId == -1){
        let user =  this.saved_data.lastLoggedUser()
        let postId = Number(params.postId)
        this.comment = {
          email: user.email,
          name: '',
          body: '',
          postId
        }
      }
      this.commentServ.getCommentById(this.commentId).subscribe((data: any) => {
        this.comment = data;
      })
    })
  }

  updateComment(){
    let virtualComment = JSON.parse(JSON.stringify(this.comment));
    this.commentServ.patchComment(virtualComment);
  }

  addComment(){
    this.commentServ.addComment(this.comment);
  }

}
