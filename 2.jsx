console.log("5" + 2);   // "52" (string + number → string)
console.log("5" - 2);   // 3   (string - number → number)
console.log("10" * "2"); // 20 (string * string → number)
console.log(true + 1);   // 2  (true → 1)
JavaScript automatically type change kar deta hai operation ke hisaab se
// String conversion
let num = 123;
console.log(String(num)); // "123"
// Number conversion
let str = "456";
console.log(Number(str)); // 456
// Boolean conversion
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("hi")); // true
let str = "  Hello World!  ";
console.log(str.length); // 15
console.log(str[0]); // ' '
console.log(str.charAt(2)); // 'H'
console.log(str.trim()); // "Hello World!"
console.log(str.slice(2, 7));    // "Hello"
console.log(str.substring(2, 7)); // "Hello"
console.log(str.replace("World", "JS")); // "  Hello JS!  "
console.log(str.includes("Hello")); // true
console.log(str.startsWith("  He")); // true
console.log(str.endsWith("!  "));    // true
let words = str.trim().split(" "); // ["Hello", "World!"]
console.log(words.join("-")); // "Hello-World!"
console.log("ha".repeat(3)); // "hahaha"

