import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  menuStat: boolean = true;

  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }
  onMenu(): void {
    this.menuStat = !this.menuStat;
  }

}
