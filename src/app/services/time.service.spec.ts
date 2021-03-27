import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test Adding a Tick Action', () => {
    afterEach(() => {
      service.stop();
    });

    describe('Test calling a spy method', () => {
      let timerCallback: jasmine.Spy<any>;
      beforeEach(() => {
        jasmine.clock().install();
        timerCallback = jasmine.createSpy('timerCallback');
        service.addOnTickAction(timerCallback);
        service.start();
      });

      afterEach(() => {
        service.stop();
        jasmine.clock().uninstall();
      });

      it('Should call the spy function', () => {
        jasmine.clock().tick(1000);
        expect(timerCallback).toHaveBeenCalled();
      });
    });
  });
});
