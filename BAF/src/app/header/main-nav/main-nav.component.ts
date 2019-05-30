import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent implements OnInit {


  // To Do: Dropdown Menu

  // let companyMenuOpen = false;
  // let supportMenuOpen = false;
  //
  //
  // let openMenu = (menu) => {
  //   if (menu === 'company') {
  //     this.companyMenuOpen = true;
  //     this.supportMenuOpen = false;
  //   } else {
  //     this.supportMenuOpen = true;
  //     this.companyMenuOpen = false;
  //   }
  // };
  //
  // let closeMenu = () => {
  //   if (menu === 'company') {
  //     this.companyMenuOpen = false;
  //   } else {
  //     this.supportMenuOpen = false;
  //   }
  // };

  constructor() { }

  ngOnInit() {
  }

}
