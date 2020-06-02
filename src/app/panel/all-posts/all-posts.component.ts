import { Component, OnInit } from '@angular/core';
import * as postServ from '../../services/posts/index.service'
import * as userServ from '../../services/users/index.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Array<any> = [];
  error: Boolean;

  constructor(
    private postServ: postServ.IndexService,
    private userServ: userServ.IndexService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.error = false;
    this.activatedRoute.params.subscribe((params: any) =>{
      if(params.userId){
        let userId = params.userId;
        this.postServ.getPostByUserId(Number(userId)).subscribe((data: Array<any>) => {
          this.posts = data;
          this.posts.map((item) => {
            item.user = this.userServ.getUser(item.userId)
          })
        }, err => {
          this.error = true;
        })
      }else{
        this.postServ.getAllPosts().subscribe((data: Array<any>) => {
          this.posts = data;
          this.posts.map((item) => {
            item.user = this.userServ.getUser(item.userId)
          })
        }, err => {
          this.error = true;
        })
      }
    })
  }

  delete(ind){
    let deletedPost = this.posts.splice(ind, 1);
    this.postServ.deletePost(deletedPost[0].id);
  }

  dismissError(){
    this.error = false;
  }

}
