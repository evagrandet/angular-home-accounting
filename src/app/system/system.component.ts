import { Component, OnInit } from '@angular/core';

import { UsersService} from '../shared/services/users.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {



  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }


}
