== value compare krta hai pr === type bhi check krta hai
//if else
// User se input lena
let age = prompt("Enter your age:");
// String ko number me convert karna
age = Number(age);
if (age < 18) {
  console.log("You are underage");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult");
} else {
  console.log("You are a senior citizen");
}
//switch
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}
//for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
//while
let i = 1;
while (i <= 5) {
  console.log("While Count: " + i);
  i++;
}
//do while ek baar chlega fir condititon dekhega
let j = 1;
do {
  console.log("Do-While Count: " + j);
  j++;
} while (j <= 5);
//for of for array and strings
let arr = ["apple", "banana", "cherry"];

for (let fruit of arr) {
  console.log(fruit);
}
//objects ke liye
let person = { name: "Ali", age: 22, city: "Delhi" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}


