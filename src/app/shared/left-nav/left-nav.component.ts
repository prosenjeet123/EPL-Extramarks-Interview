import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  menuStat: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  onMenu(): void {
    this.menuStat = !this.menuStat;
  }

}
