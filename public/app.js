"use strict";
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    Invoice.prototype.format = function () {
        // this.client = 'Browser' // erro pq so pode ser usada como leitura
        return this.client + ", owes " + this.details + ", for " + this.amount;
    };
    return Invoice;
}());
var invOne = new Invoice('Mario', 'Work on mario web site', 300);
var invTwo = new Invoice('Luigi', 'Work on Luigi website', 350);
// console.log(invOne);
// console.log(invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = 'Yoshi';
// invOne.amount = 400;
console.log(invoices);
invoices.forEach(function (inv) {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
});
