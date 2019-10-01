import { Person } from './types/Person';

export class Player implements Person {
  public name!: string;
  public age!: number;
  public highScore!: number;

  public formatName() {
    return this.name.toUpperCase();
  }
}
