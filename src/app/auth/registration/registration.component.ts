import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
      this.form = new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          name: new FormControl(null, [Validators.required]),
          agree: new FormControl(false, [Validators.requiredTrue])
      });
  }

  onSubmit() {
      const {email, password, name} = this.form.value;
      const user = new User(email, password, name);
      this.usersService.createUser(user)
        .subscribe(() => {
            this.router.navigate(['/login'], {
                queryParams: {
                    nowCanLogin: true
                }
            });
        });
  }

}
