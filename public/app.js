import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Yoshi', 'Web Work', 250);
// docTwo = new Payments('Mario', 'Plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('Mario', 'Work on mario web site', 300);
// const invTwo = new Invoice('Luigi', 'Work on Luigi website', 350);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach(inv => {
//   // console.log(inv.client, inv.details, inv.amount, inv.format());
//   console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
