import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  types: String[]
  selectedType;
  constructor(private router: Router, private postService: PostService) { }


  ngOnInit() {
    this.types = ["BLOG", "SLOGAN", "PHOTO"];
    $('#loader').hide();
  }

  choiceType(e) {
    this.selectedType = e.target.value;
    switch (e.target.value) {
      case "BLOG":
        this.router.navigate(['/user/createBlog'])
        break;
      case "SLOGAN":
        this.router.navigate(['/user/createSlogan'])
        break;
      case "PHOTO":
        this.router.navigate(['/user/createPhoto'])
        break;
    }
  }

  onSubmit() {
    var type = this.selectedType;
    if (type == undefined || type == null) {
      type = "BLOG";
    }
    var file;
    var title = $('#title').val();
    var content = $('#content').val();
    var source = $('#source').val();
    if (title == "") title = null;
    if (content == "") content = null;
    if (source == "") source = null;
    var formData = new FormData();
    formData.append("type", type.toString());
    if (title == null || title == undefined) {
      alert('Please input title');
      return;
    } else {
      formData.append("title", title.toString());
    }
    if (type != "PHOTO") {
      if (content == undefined) {
        alert('Please input content');
        return;
      }
      formData.append("content", content.toString());
    }
    if (type != "SLOGAN") {
      file = $('#fileInput').prop('files')[0];
      if (file == null || file == undefined) {
        alert('Please select image');
        return;
      }
      formData.append("image", file);
    } else if (source != null && source || undefined) {
      formData.append("source", source.toString());
    }
    // new Response(formData).text().then(console.log)
    var email = sessionStorage.getItem("email");
    formData.append("email", email);
    $('#loader').show();
    $("#content-div").hide()
    this.postService.post(formData)
      .subscribe(res => {
        $('#loader').hide();
        $("#content-div").show()
        alert("Post success");
      },
        err => {
          $('#loader').hide();
          $("#content-div").show()
          alert(err.error.message + " Please try again");
        }
      )
  }

}
