import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payments implements HasFormatter {

  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) { }

  format() {
    return `${this.recepient}, is owed R$${this.details}, for ${this.amount}`
  }
}