// Interfaces 
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b:number):number;
}

const me: isPerson = {
  name: 'Wilson',
  age: 31,
  speak(text: string): void{
    console.log(text)
  },
  spend(amount: number): number{
    console.log('I spent', amount);
    return amount;
  }
};
const greetPerson = (person: isPerson) => {
  console.log(`hello ${person.name}`)
}
console.log(me);

greetPerson(me);


import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('Mario', 'Work on mario web site', 300);
const invTwo = new Invoice('Luigi', 'Work on Luigi website', 350);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(inv => {
  // console.log(inv.client, inv.details, inv.amount, inv.format());
  console.log(inv.client, inv.amount, inv.format());

})

