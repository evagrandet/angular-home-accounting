import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

    isOpenMobileMenu = false;
    isOpenUserMenu = false;

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
