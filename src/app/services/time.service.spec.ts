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

    describe('Add a counter', () => {
      let count: number = 0;

      beforeEach(() => {
        service.addOnTickAction(() => {
          count++;
        });
        service.start();
      });
      it('Should increase the count', fakeAsync(() => {
        jasmine.clock().install();
        jasmine.clock().tick(1000);
        jasmine.clock().uninstall();
        expect(count).toBe(1);
      }));
    });

    describe('Test adding to an array', () => {
      let objects = [];
      let item = { test: 'test' };
      beforeEach(() => {
        service.addOnTickAction(() => {
          objects.push(item);
        });
        service.start();
      });

      it('Should have added an item', fakeAsync(() => {
        tick(2000);
        expect(objects).toContain(item);
      }));
    });

    describe('Test a console log output', () => {
      beforeEach(() => {
        console.log = jasmine.createSpy('log');

        service.addOnTickAction(() => {
          console.log('tick');
        });
        service.start();
      });

      it('Should have logged the word tick', fakeAsync(() => {
        tick(2000);
        expect(console.log).toHaveBeenCalledWith('tick');
      }));
    });
  });
});
