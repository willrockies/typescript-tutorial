let greet: Function;
//greet = 'hello';

greet = () => {
  console.log('hello, again');
}

const add = (a: number, b: number, c: number | string = 10):void => {
  console.log(a + b);
  console.log(c); // valor 10 como default
}

// add(5, 10, '20');
add(5,10);

const minus = (a:number, b:number): number => {
  return a - b;

}

let result = minus(10, 7);
console.log(result);