import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.less']
})
export class MiniNavComponent implements OnInit {

  companyListOpen = false;
  supportListOpen = false;

  openMenu = (menu) => {
    if (menu === 'company') {
      this.companyListOpen = true;
    } else {
      this.supportListOpen = true;
    }
  };

  closeMenu = (menu) => {
    if (menu === 'company') {
      this.companyListOpen = false;
    } else {
      this.supportListOpen = false;
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
