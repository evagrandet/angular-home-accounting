import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';
import { Message } from 'src/app/shared/models/message';

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

    message: Message;

    constructor(private usersService: UsersService) {}

ngOnInit() {
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
                    //
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
