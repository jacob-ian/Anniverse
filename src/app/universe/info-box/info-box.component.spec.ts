import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test button click', () => {
    it('Should emit a string from the output emitter', () => {
      spyOn(component.closeEmitter, 'emit');
      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      expect(component.closeEmitter.emit).toHaveBeenCalledWith('close');
    });
  });

  describe('Test rendering the content', () => {
    it('Should have rendered the page title', () => {
      let title = fixture.debugElement.query(By.css('h1')).nativeElement;
      let text = title.innerText;

      expect(text).toBe("Dhani & Jacob's Anniverse");
    });
  });
});
