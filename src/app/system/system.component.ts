import { Component, OnInit } from '@angular/core';

import { UsersService} from '../shared/services/users.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

    isOpenMobileMenu = false;
    isOpenUserMenu = false;
    isDarkTheme: boolean;
    user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  toggleMobileMenu() {
      this.isOpenMobileMenu = !this.isOpenMobileMenu;
  }
    toggleUserMenu() {
        this.isOpenUserMenu = !this.isOpenUserMenu;
    }
}
