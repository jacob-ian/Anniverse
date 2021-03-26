import { Injectable, OnDestroy } from '@angular/core';

interface TickAction {
  callback: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class TimeService implements OnDestroy {
  private interval: any;
  private tickActions: TickAction[] = [];

  constructor() {}

  public start(): void {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    this.tickActions.forEach((action) => action.callback());
  }

  public stop(): void {
    clearInterval(this.interval);
  }

  public addOnTickAction(callback: () => void): void {
    const action: TickAction = {
      callback,
    };
    this.tickActions.push(action);
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
