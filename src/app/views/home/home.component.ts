import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }
  isLogin = true;
  posts: Post[];
  ngOnInit() {
    var user = sessionStorage.getItem("name");
    if (user == null) {
      this.isLogin = false;
    }
    this.postService.getTop3()
      .subscribe(res => {
        this.posts = res;
        this.posts.forEach(post => {
          post.createdDate = post.createdDate.split('T')[0];
          console.log(post.createdDate);
        });
      })
  }

  viewDetail(id) {
    this.router.navigate(['/detail', id]);
  }

}
