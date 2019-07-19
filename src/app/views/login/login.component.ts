import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user != null) {
        sessionStorage.setItem("name", user.name);
        this.router.navigate(['/'])
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.loginSuccess(user.email, user.name);
      })
  }

  loginSuccess(email, fullName): void {
    this.user.post({ email, fullName })
      .subscribe((data) => {
        sessionStorage.setItem("name", fullName);
        this.router.navigate(['/'])
      },
        (error) => {
          sessionStorage.removeItem("name");
          this.authService.signOut();
          alert("Email is banned")
          this.router.navigate(['/'])
        })
  };
}
