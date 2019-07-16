import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user == null) {
        this.router.navigate(['/'])
      }
    });
  }

  routerUser(index) {
    switch (index) {
      case 1:
        this.router.navigate(['/user/create'])
        break
      case 2:
        this.router.navigate(['/user/myblog'])
        break
    }
  }

}
