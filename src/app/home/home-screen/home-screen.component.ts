import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  darkDay: boolean;

  sendMsg: string;

  openModelStatus: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  dayNight(): void {
    this.darkDay = !this.darkDay;

  }

  addItem(event: any) {
    this.openModelStatus = !this.openModelStatus;
  }

  openVideo(): void {
    this.sendMsg = "screen1";
    this.openModelStatus = !this.openModelStatus
  }

  playModel(): void {
    this.sendMsg = "screen2";
    this.openModelStatus = !this.openModelStatus;
  }
}
