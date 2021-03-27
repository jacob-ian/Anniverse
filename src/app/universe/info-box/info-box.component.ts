import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.sass'],
})
export class InfoBoxComponent implements OnInit {
  @Output('close') closeEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.closeEmitter.emit('close');
  }
}
