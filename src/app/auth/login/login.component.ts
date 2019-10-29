import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user: User;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
        const formData = this.form.value;
        return this.usersService.getUser(formData).subscribe((user) => {
            console.log(user)
            // if (user.email) {
            //     user.password ? console.log('work') : alert('Пароль неверный!');
            // } else {
            //     alert('Такого пользователя нет!');
            // }
        });
    }
}
