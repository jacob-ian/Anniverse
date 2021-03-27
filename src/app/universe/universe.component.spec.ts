import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UniverseComponent } from './universe.component';

describe('UniverseComponent', () => {
  let component: UniverseComponent;
  let fixture: ComponentFixture<UniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniverseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test adding an object to the canvas', () => {
    let spyCelestial = jasmine.createSpyObj('Celestial', ['draw']);

    it('Should call the draw method', () => {
      component.add(spyCelestial);
      expect(spyCelestial.draw).toHaveBeenCalled();
    });
  });

  describe('Test the onButtonPress info rendering', () => {
    it('Should render the info-box component', () => {
      component.onButtonPress();
      fixture.detectChanges();
      let infoBox = fixture.debugElement.query(By.css('app-info-box'))
        .nativeElement;
      expect(infoBox).toBeTruthy();
    });
  });
});
