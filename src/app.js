"use strict";
exports.__esModule = true;
var me = {
    name: 'Wilson',
    age: 31,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
var Invoice_js_1 = require("./classes/Invoice.js");
var invOne = new Invoice_js_1.Invoice('Mario', 'Work on mario web site', 300);
var invTwo = new Invoice_js_1.Invoice('Luigi', 'Work on Luigi website', 350);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(function (inv) {
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
});
