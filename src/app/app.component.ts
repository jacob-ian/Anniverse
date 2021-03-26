import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AnniversaryMessage } from './services/celestials/anniversary-message';
import { AnniversaryMessageFactory } from './services/celestials/anniversary-message-factory';
import { CelestialFactory } from './services/celestials/celestial-factory';
import { StarFactory } from './services/celestials/star-factory';
import { TimeService } from './services/time.service';
import { UniverseComponent } from './universe/universe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Anniverse';

  @ViewChild(UniverseComponent, { static: true })
  private universe: UniverseComponent;
  private anniversaryMessageShown: boolean = false;
  private celestialFactory: CelestialFactory;

  constructor(private time: TimeService) {}

  ngOnInit(): void {
    this.time.addOnTickAction(() => this.addCelestial());
    this.time.start();
  }

  private addCelestial(): void {
    if (this.needsAnniversaryMessage()) {
      this.celestialFactory = new AnniversaryMessageFactory();
      this.anniversaryMessageShown = true;
    } else {
      this.celestialFactory = new StarFactory();
    }

    let celestial = this.celestialFactory.create();
    this.universe.add(celestial);
  }

  private needsAnniversaryMessage(): boolean {
    return this.isAnniverary() && !this.anniversaryMessageShown;
  }

  private isAnniverary(): boolean {
    const today = new Date(Date.now());
    const date = today.getDate();
    const month = today.getMonth();

    if (date === 29 && month === 2) {
      return true;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.time.stop();
  }
}
