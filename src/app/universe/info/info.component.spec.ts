import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test button click', () => {
    it('Should emit a string from the output emitter', () => {
      spyOn(component.clickEmitter, 'emit');
      let button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      expect(component.clickEmitter.emit).toHaveBeenCalledWith('click');
    });
  });
});
