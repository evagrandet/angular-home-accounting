import { Component, OnInit, Output } from '@angular/core';
import { User } from 'app/shared/models/user';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() isOpenMobileMenu: boolean;
    isOpenUserMenu = false;
    isDarkTheme: boolean;
    user: User;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {}

    toggleMobileMenu() {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
    }
    toggleUserMenu() {
        this.isOpenUserMenu = !this.isOpenUserMenu;
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
