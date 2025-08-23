//arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Mango"
push() → last me element add karta hai
pop() → last element remove karta hai
unshift() → starting me element add karta hai
shift() → starting ka element remove karta hai
let arr = [1, 2, 3];
arr.push(4);      // [1,2,3,4]
arr.pop();        // [1,2,3]
arr.unshift(0);   // [0,1,2,3]
arr.shift();      // [1,2,3]
indexOf() → element ka index return karta hai
includes() → check karta hai element hai ya nahi
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Mango")); // true
map() → har element pe operation perform karke new array return karega
filter() → condition true wale elements return karega
reduce() → array ko ek single value me reduce karega (sum, product, etc.)
forEach() → har element pe loop lagata hai (but return kuch nahi karta)
let nums = [1, 2, 3, 4];
// map
let doubled = nums.map(n => n * 2); // [2,4,6,8]
// filter
let evens = nums.filter(n => n % 2 === 0); // [2,4]
// reduce
let sum = nums.reduce((acc, n) => acc + n, 0); // 10
// forEach
nums.forEach(n => console.log(n));
concat() → do arrays ko merge karta hai
slice(start, end) → array ka ek part return karega (without modifying original)
splice(start, deleteCount, ...items) → array modify karta hai (add/remove)
join() → array ko string me convert karta hai
toString() → simple string me convert
sort() → array ko sort karta hai (lexicographically by default)
reverse() → array ka order ulta kar deta hai
let nums = [10, 5, 20, 2];
nums.sort((a, b) => a - b);
nums.reverse();   
