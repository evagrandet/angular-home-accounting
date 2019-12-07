import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isOpenMobileMenu = false;
    isOpenUserMenu = false;
    isDarkTheme: boolean;
    user: User;

  constructor() { }

  ngOnInit() {
  }

      toggleMobileMenu() {
      this.isOpenMobileMenu = !this.isOpenMobileMenu;
  }
    toggleUserMenu() {
        this.isOpenUserMenu = !this.isOpenUserMenu;
    }
}
