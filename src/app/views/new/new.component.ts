import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }
  isLogin = true;
  posts: Post[];
  page = 0;
  ngOnInit() {
    var user = sessionStorage.getItem("name");
    if (user == null) {
      this.isLogin = false;
    }
    this.page = 0;
    this.getListPost(0);
  }

  getListPost(page) {
    this.postService.getPost(page)
      .subscribe(res => {
        if (res.length == 0) {
          alert("End of news!")
          return;
        }
        this.page = page;
        this.posts = res;
        this.posts.forEach(post => {
          post.createdDate = post.createdDate.split('T')[0];
        });
      })
  }

  seeMore() {
    this.getListPost(this.page + 1);
  }

  viewDetail(id) {
    this.router.navigate(['/detail', id]);
  }

}
