export class Payments {
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient}, is owed R$${this.details}, for ${this.amount}`;
    }
}
