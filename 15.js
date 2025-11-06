//iife:immediately invoke function 
async function sleep(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(45)
    },1000);
  })
}
//so it is made as immediately invoke function
(async function main(){
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b);
})();
Normally, you can’t use await at the top level of JavaScript files
(unless you’re in an ES module or special environment).
Using an IIFE allows you to write asynchronous code without 
defining a separate named function and calling it later.
//Destructuring in js 
//previous 
let x,y=[1,5]
console.log(x,y)
//next with spread
let [x,y, ...rest]=[1,5,7]
console.log(x,y,rest)
//destructuring in the object 
let obj={
  a:1,
  b:2,
  c:3
}
let {a,b}=obj
console.log(a,b)
//agar chahte ho ki variable no of arguments use krna hai toh spread operator use kro
//mltb values ko spread krdo 
function sum(a, b, c) {
  return a + b + c;
}
const num = [1, 2, 3];
console.log(sum(...num));
//scoping in js 
let and const are block level scope 
var inside the js function is local to the function 
var declared outisde the function becomes global 
//hoisting -applicable for var only moves to the top 
var a1=6;
//declaration at the top hota hai ,mtlb tum us variable ko use kr skte 
// ho agar wo declare niche bhi hai
Hoisting means JavaScript moves declarations to the top of their scope (not the code itself, just the declaration).
It happens during the memory creation phase — before code actually runs.
greet(); // ✅ Works!
function greet() {
  console.log("Hello, Baheroz!");
}







  









