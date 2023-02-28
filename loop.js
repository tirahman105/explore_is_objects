const numbers = [12, 54, 65, 3, 54];

// array এর মধ্যে loop চালানোর জন্য নিচের মত করে করা যায় 
/* for(const number of numbers){
    console.log(number);
} */


// 1. for of can not used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// first option to loop through an object
const keys = Object.keys(bottle);// object এর key আলাদাভাবে নিলে সেটা একটা array. Object এর উপর loop চালানো যায় না কিন্তু array এর উপর চালানো যায়। 

/* 
3 ways to read object properties
bottle.color  এটা dot motation । যদি আমরা object এর property নাম জানি তাহলে এটা ব্যবহার করব। 
bottle['color']
bottle[key]  এটা bracket notation. যখন আমরা object এর property এর নাম জানব না তখন এটা ব্যবহার করব। এখানে থার্ড ব্র্যাকেট এর মধ্যে একটা variable দিয়েছি এর মধ্যে property নাম আসবে। 
*/
// console.log(keys);

for(const key of keys){
    // console.log(key, bottle[key]);
}

// Object এর উপর loop চালাতে for in use করব। 
// for in loop
for( const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

// advanced 
const pair = Object.entries(bottle);
console.log(pair)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}