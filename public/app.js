"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
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
invOne.client = 'Yoshi';
invOne.amount = 400;
console.log(invoices);
