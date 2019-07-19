import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }
  isLogin = true;
  post: Post;
  ngOnInit() {
    var user = sessionStorage.getItem("name");
    if (user == null) {
      this.isLogin = false;
    }
    var id = this.route.params['value'].id;
    this.postService.getById(id)
      .subscribe(res => {
        this.post = res;
        this.post.createdDate = this.post.createdDate.split('T')[0];
      })
  }

}
