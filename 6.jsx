Function ek reusable block of code hota hai jo ek kaam karta hai.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 2)); // 8
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // 6
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet());       // Hello Guest
console.log(greet("Baheroz")); // Hello Baheroz
Scope = Variable kahan tak accessible hai.
let x = 10;
function show() {
  console.log(x); // 10
}
show();
function test() {
  let y = 20;
  console.log(y); // 20
}
test();
// console.log(y); // ❌ Error: y is not defined
if (true) {
  let a = 30;
  const b = 40;
  console.log(a, b); // 30 40
}
// console.log(a); // ❌ Error
if (true) {
  var z = 50;
}
console.log(z); // 50 ✅ (var block ke bahar bhi accessible hai)

