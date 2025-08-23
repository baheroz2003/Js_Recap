const greet = () => console.log("Hello Baheroz!");
greet(); // call
const numbers = [10, 20, 30, 40, 50];
// arrow function use
const found = numbers.find(num => num > 25);
console.log(found); // 30
const marks = [85, 90, 78, 92];
// kya sab pass hai (>= 35)?
const allPass = marks.every(m => m >= 35);
console.log(allPass); // true
const nums = [5, 12, 18, 7, 30];
// sirf > 10
const filtered = nums.filter(n => n > 10);
console.log(filtered); // [12, 18, 30]
const ages = [12, 17, 20, 14];
// kya koi adult hai (>=18)?
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // true
const fruits = ["apple", "banana", "mango"];
fruits.forEach(f => console.log(f.toUpperCase()));
// APPLE
// BANANA
// MANGO
const numbers2 = [1, 2, 3, 4];
// square nikalna
const squares = numbers2.map(n => n * n);
console.log(squares); // [1, 4, 9, 16]
const nums2 = [10, 20, 30];
// sum
const total = nums2.reduce((acc, n) => acc + n, 0);
console.log(total); // 60
find → pehla jo match kare
every → sabhi match kare
some → koi ek match kare
filter → jo match kare unko new array me do
forEach → har ek par operation (no return)
map → transform karke new array
reduce → ek hi value me compress






