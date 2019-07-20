import { Routes } from '@angular/router'
import { BlogComponent } from '../create-blog/blog/blog.component';
import { SloganComponent } from '../create-blog/slogan/slogan.component';
import { PhotoComponent } from '../create-blog/photo/photo.component';

export const UserRoutes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'createBlog', component: BlogComponent },
    { path: 'createSlogan', component: SloganComponent },
    { path: 'createPhoto', component: PhotoComponent }
];