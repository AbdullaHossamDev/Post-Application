import { Component, OnInit } from '@angular/core';
import * as commentServ from '../../services/comments/index.service';


@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: Array<any>;

  constructor(
    private commentServ: commentServ.IndexService,
  ) { }

  ngOnInit(): void {
    this.comments = [];
    this.commentServ.getAllComments().subscribe((data: Array<any>) => {
      this.comments = data;
    })
  }

  delete(ind){
    let deletedComment = this.comments.splice(ind, 1);
    this.commentServ.deleteComment(deletedComment[0].id);
  }

}
