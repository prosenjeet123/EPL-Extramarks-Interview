import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss']
})
export class ModelPopupComponent implements OnInit {

  @Input() msgRecieved = '';
  @Input() viewMore: boolean;

  @Output() clickEvent = new EventEmitter();

  closeStatus: boolean;

  screen2Steps: number = 1;
  highNum: number;

  constructor() { }

  ngOnInit(): void {
  }
  closeMe(event: any): void {
    this.clickEvent.emit(event);
    this.viewMore = !this.viewMore;
  }


  letsPlay(): void {
    this.screen2Steps = 2;
  }

  lastSubmit(): void {
    this.screen2Steps = 3;
  }
  reloadP(): void {
    window.location.reload();
  }
}
