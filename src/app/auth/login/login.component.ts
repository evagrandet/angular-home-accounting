import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'app/shared/services/users.service';
import { User } from 'app/shared/models/user';
import { AuthService } from 'app/shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    user: User;

    existingUser = true;
    rightPassword = true;
    nowCanLogin = false;

    constructor(
        private usersService: UsersService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            if (params.nowCanLogin) {
                this.nowCanLogin = true;
            }
        });
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        });
    }

    onSubmit() {
        const formData = this.form.value;
        return this.usersService.getUser(formData).subscribe(user => {
            if (user.find((user: User) => user.email === formData.email)) {
                if (user.find((user: User) => user.password === formData.password)) {
                    window.localStorage.setItem('user', JSON.stringify(user));
                    this.authService.login();
                    this.router.navigate(['/system', 'bill']);
                } else {
                    this.existingUser = true;
                    this.rightPassword = false;
                }
            } else {
                this.existingUser = false;
                this.rightPassword = true;
            }
        });
    }
}
