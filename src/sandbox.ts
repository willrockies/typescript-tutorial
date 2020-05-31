type StringOrNum = string | number;
type objWithName = {name: string, uid: string | number}

const logDetails = (uid: StringOrNum, item: string) =>{
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
 console.log (`${user.name} says hello again`)
}

// console.log(greetAgain("Wilson", "3"))