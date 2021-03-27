import { AnniversaryMessage } from './anniversary-message';
import { AnniversaryMessageFactory } from './anniversary-message-factory';

describe('AnniversaryMessageFactory', () => {
  let factory: AnniversaryMessageFactory;

  it('should create an instance', () => {
    expect(new AnniversaryMessageFactory()).toBeTruthy();
  });

  describe('Test creating an anniversary message', () => {
    beforeEach(() => {
      factory = new AnniversaryMessageFactory();
    });

    describe('Test for the fifth anniversary', () => {
      beforeEach(() => {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date('29-Mar-2023'));
      });

      it('Should create an Anniversary Message', () => {
        let message = factory.create();
        expect(message).toBeInstanceOf(AnniversaryMessage);
      });

      it('Should create an anniversary message with a th in message', () => {
        let anniMessage = factory.create() as AnniversaryMessage;
        let message = anniMessage.getMessage();

        expect(message).toBe('Happy 5th Anniversary');
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });
    });

    describe('Test for the 21st anniversary', () => {
      let anniMessage: AnniversaryMessage;
      beforeEach(() => {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date('29-Mar-2039'));
        anniMessage = factory.create() as AnniversaryMessage;
      });

      it('Should create a message with st in', () => {
        let message = anniMessage.getMessage();
        expect(message).toBe('Happy 21st Anniversary');
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });
    });

    describe('Test for the 22nd anniversary', () => {
      let anniMessage: AnniversaryMessage;
      beforeEach(() => {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date('29-Mar-2040'));
        anniMessage = factory.create() as AnniversaryMessage;
      });

      it('Should create a message with nd in', () => {
        let message = anniMessage.getMessage();
        expect(message).toBe('Happy 22nd Anniversary');
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });
    });

    describe('Test for the 23rd anniversary', () => {
      let anniMessage: AnniversaryMessage;
      beforeEach(() => {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date('29-Mar-2041'));
        anniMessage = factory.create() as AnniversaryMessage;
      });

      it('Should create a message with rd in', () => {
        let message = anniMessage.getMessage();
        expect(message).toBe('Happy 23rd Anniversary');
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });
    });
  });
});
