class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number){
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format(){
    // this.client = 'Browser' // erro pq so pode ser usada como leitura
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

// invOne.client = 'Yoshi';
// invOne.amount = 400;

console.log(invoices);

invoices.forEach(inv => {
  // console.log(inv.client, inv.details, inv.amount, inv.format());
  console.log(inv.client,  inv.amount, inv.format());
  
})

