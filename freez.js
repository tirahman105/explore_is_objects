const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
// const twoDimension = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]]

console.log(bottle);
// Object.seal(bottle); //seal use করলে এই object এর property delete করা যায় না কিন্তু পরিবর্তন করা যায়। 
Object.freeze(bottle); // freeze use করলে এই object এর property delete করা যায় না , পরিবর্তনও করা যায় না। 
delete bottle.isCleaned; // delete use  করে object এর property delete করা যায়। 
bottle.price = 1000;
bottle.height = 12;
console.log(bottle);