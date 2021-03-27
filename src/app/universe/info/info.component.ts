import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  @Output('clicked') clickEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public click(): void {
    this.clickEmitter.emit('click');
  }
}
