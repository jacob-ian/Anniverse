import { AnniversaryMessage } from './anniversary-message';
import { Celestial } from './celestial';
import { CelestialFactory } from './celestial-factory';

export class AnniversaryMessageFactory extends CelestialFactory {
  public create(): Celestial {
    let message = this.createAnniveraryMessage();
    return new AnniversaryMessage(message);
  }

  private createAnniveraryMessage(): string {
    let years = this.getAnniversaryYear();
    let yearSuffix = this.getYearsSuffix(years);

    return `Happy ${years}${yearSuffix} Anniversary`;
  }

  private getAnniversaryYear(): number {
    const date = new Date(Date.now());
    const year = date.getFullYear();
    return year - 2018;
  }

  private getYearsSuffix(year: number): string {
    const years = `${year}`;
    const lastDigit = parseInt(years[years.length - 1]);

    if (lastDigit === 1) {
      return 'st';
    }

    if (lastDigit === 2) {
      return 'nd';
    }

    if (lastDigit === 3) {
      return 'rd';
    }

    return 'th';
  }
}
