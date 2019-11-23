import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';
import { Message } from 'src/app/shared/models/message';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    user: User;

    existingUser = true;
    rightPassword = true;
    nowCanLogin = false;

    message: Message;

    constructor(
        private usersService: UsersService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

ngOnInit() {
    this.route.queryParams
        .subscribe((params: Params) => {
            if (params['nowCanLogin']) {
                this.nowCanLogin = true;
            }
        });
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
}

onSubmit() {
    const formData = this.form.value;
    return this.usersService.getUser(formData)
        .subscribe((user) => {
            if (user.find(item => item.email === formData.email)) {

                if (user.find(item => item.password === formData.password)) {
                    this.message.text = '';
                    window.localStorage.setItem('user', JSON.stringify(user));
                    this.authService.login();
                    // this.router.navigate(['']);
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
