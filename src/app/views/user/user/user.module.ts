import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { BlogComponent } from '../create-blog/blog/blog.component';
import { FormsModule }   from '@angular/forms';
import * as $ from "jquery";
import { SloganComponent } from '../create-blog/slogan/slogan.component';
import { PhotoComponent } from '../create-blog/photo/photo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule
  ],
  declarations: [
    BlogComponent,
    SloganComponent,
    PhotoComponent
  ]
})
export class UserModule { }
