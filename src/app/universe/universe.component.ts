import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AnniversaryMessage } from '../services/celestials/anniversary-message';
import { Celestial, Position } from '../services/celestials/celestial';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.sass'],
})
export class UniverseComponent implements OnInit {
  public universeWidth: number = 0;
  public universeHeight: number = 0;

  @ViewChild('canvas', { static: true }) private canvasRef: ElementRef;
  private canvas: HTMLCanvasElement;

  constructor() {}

  ngOnInit(): void {
    this.universeHeight = window.innerHeight;
    this.universeWidth = window.innerWidth;
    this.canvas = this.canvasRef.nativeElement;
  }

  public add(celestial: Celestial): void {
    let context = this.canvas.getContext('2d');
    let position: Position;

    if (this.isAnniversaryMessage(celestial)) {
      position = this.getCentralPosition();
    } else {
      position = this.generatePosition();
    }

    celestial.draw(position, context);
    context.save();
  }

  private isAnniversaryMessage(
    celestial: Celestial
  ): celestial is AnniversaryMessage {
    return celestial instanceof AnniversaryMessage;
  }

  private getCentralPosition(): Position {
    const x = this.universeWidth / 4;
    const y = this.universeHeight / 2;

    return { x, y };
  }

  private generatePosition(): Position {
    let x = this.generateRandomNumber(this.universeWidth);
    let y = this.generateRandomNumber(this.universeHeight);

    return { x, y };
  }

  private generateRandomNumber(max: number): number {
    return Math.random() * max;
  }
}
