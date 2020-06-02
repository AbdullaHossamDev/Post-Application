import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as commentServ from '../../services/comments/index.service'

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
    private commentServ: commentServ.IndexService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) =>{
      this.commentId = Number(params.id);
      this.commentServ.getCommentById(this.commentId).subscribe((data: any) => {
        this.comment = data;
      })
    })
  }

}
