import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniverseComponent } from './universe/universe.component';
import { InfoComponent } from './universe/info/info.component';
import { InfoBoxComponent } from './universe/info-box/info-box.component';

@NgModule({
  declarations: [AppComponent, UniverseComponent, InfoComponent, InfoBoxComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
