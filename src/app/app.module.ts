import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from './views/home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './views/nav/nav.component';
import { LoginComponent } from './views/login/login.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { CreateBlogComponent } from './views/user/create-blog/create-blog.component';
import { MenuComponent } from './views/user/menu/menu.component';
import { MyblogComponent } from './views/user/myblog/myblog.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './views/detail/detail.component';
import { NewComponent } from './views/new/new.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("34064066657-uohogrfsvk57hs3eq6d0mhvfm4qclu6i.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    CreateBlogComponent,
    MenuComponent,
    MyblogComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }