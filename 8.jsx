//arrow function
Bhai, arrow function JavaScript me ek modern (ES6) tareeka hai function likhne ka. 
Yeh chhoti aur concise syntax deta hai aur this ka behaviour normal function se alag hota hai.
function add(a, b) {
  return a + b;
}
const add = (a, b) => {
  return a + b;
};
const add = (a, b) => a + b;
Short Syntax – kam likhna padta hai.
No this binding – arrow function apna this create nahi karta, balki parent scope ka this use karta hai.
Is wajah se ye callbacks, event handlers, setTimeout me useful hai.
Implicit Return – agar ek hi expression hai toh return likhne ki zarurat nahi.
const greet = () => console.log("Hello World!");
greet();
const square = x => x * x;
console.log(square(5)); // 25
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
const person = {
  name: "Baheroz",
  normalFunc: function() {
    console.log("Normal:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

person.normalFunc(); // Normal: Baheroz
person.arrowFunc();  // Arrow: undefined (kyunki arrow function apna `this` nahi banata)
//use case
Jab chhoti functions likhne ho (callbacks, array methods like map, filter, reduce).
Jab tumhe this preserve karna ho (event listeners ke bahar ya nested function me).
