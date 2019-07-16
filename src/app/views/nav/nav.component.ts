import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name = null;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.name = sessionStorage.getItem("name");
  }

  logout() {
    sessionStorage.removeItem("name");
    this.authService.signOut()
    this.name = null
    this.router.navigate(['/'])
  }

  goUser() {
    this.router.navigate(['/user'])
  }
}
