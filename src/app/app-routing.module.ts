import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CreateBlogComponent } from './views/user/create-blog/create-blog.component';
import { MyblogComponent } from './views/user/myblog/myblog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: CreateBlogComponent },
  { path: 'user/create', component: CreateBlogComponent },
  { path: 'user/myblog', component: MyblogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
