import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CreateBlogComponent } from './views/user/create-blog/create-blog.component';
import { MyblogComponent } from './views/user/myblog/myblog.component';
import { DetailComponent } from './views/detail/detail.component';
import { NewComponent } from './views/new/new.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    component: CreateBlogComponent,
    children: [{
      path: '',
      loadChildren: './views/user/user/user.module#UserModule'
    }]
  },
  { path: 'myblog', component: MyblogComponent },
  { path: 'new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
