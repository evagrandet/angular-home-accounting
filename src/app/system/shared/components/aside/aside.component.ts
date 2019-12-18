import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
    @Input() isOpenMobileMenu;
    constructor() { }

    ngOnInit() {
    }

}
