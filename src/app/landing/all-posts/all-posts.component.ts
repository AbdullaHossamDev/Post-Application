import { Component, OnInit } from '@angular/core';
import * as postServ from '../../services/posts/index.service'
import * as userServ from '../../services/users/index.service'
import * as commentServ from '../../services/comments/index.service'
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Array<any> = [];
  displayPosts;

  constructor(
    private postServ: postServ.IndexService,
    private commentServ: commentServ.IndexService,
    private userServ: userServ.IndexService
  ) { }

  ngOnInit(): void {
    this.displayPosts = 10;
    this.postServ.getAllPosts().subscribe((data: Array<any>) => {
      this.posts = data;
      this.posts.map((post) => {
        post.user = this.userServ.getUser(post.userId);
        post.comments = [];
        post.display = 0;
        this.commentServ.getComments(post.id).subscribe((data: any) => {
          post.comments = data;
          post.display = 3
        })
      })
    })
  }

  increaseCommentDisplay(post) {
    post.display += 3;
  }

  decreaseCommentDisplay(post) {
    post.display -= 3;
  }

  increasePostDisplay() {
    this.displayPosts += 5;
  }

}
