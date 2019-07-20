import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { viewClassName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }
  postList: Post[];
  page = 0;
  email;
  ngOnInit() {
    this.email = sessionStorage.getItem("email");
    this.getList(0);
  }

  view(id) {
    this.router.navigate(['/detail', id])
  }

  delete(id) {
    this.postService.deletePost(id, this.email)
    .subscribe( res => {
      if (this.postList.length == 1) {
        this.getList(this.page -1)
      } else {
        this.getList(this.page);
      }
    })
  }

  getList(page) {
    if (page < 0) return;
    this.postService.getByMe(this.email, page)
    .subscribe(res => {
      if (res.length > 0) {
        this.page = page;
        this.postList = res;
      }
    })
  }

  changePage(n) {
    this.getList(this.page + n);
  }
}
