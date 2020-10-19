class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(){
    return `${this.client}, owes ${this.details}, for ${this.amount}`
  }
}
const invOne = new Invoice('Mario', 'Work on mario web site', 300);
const invTwo = new Invoice('Luigi', 'Work on Luigi website', 350);

// console.log(invOne);
// console.log(invTwo);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Yoshi';
invOne.amount = 400;

console.log(invoices);

