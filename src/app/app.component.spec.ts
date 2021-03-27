import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Anniverse'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Anniverse');
  });

  describe('Test determination of anniversary', () => {
    beforeEach(() => {
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });
    describe('Test on a day that is not the anniversary', () => {
      it('Should return false', () => {
        jasmine.clock().mockDate(new Date('27-Mar-2021'));

        let isAnni = app.isAnniverary();
        expect(isAnni).toBeFalse();
      });
    });

    describe('Test on a day that it is the anniversary', () => {
      it('Should return true', () => {
        jasmine.clock().mockDate(new Date('29-Mar-2023'));

        let isAnni = app.isAnniverary();
        expect(isAnni).toBeTrue();
      });
    });
  });
});
