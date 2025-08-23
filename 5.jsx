// Object literal
let person = {
  name: "Baheroz",
  age: 22,
  isStudent: true,
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
console.log(person.name);     // Baheroz
console.log(person["age"]);   // 22
person.greet();               // Hello, Baheroz
console.log(person.name);    // Dot notation
console.log(person["age"]);  // Bracket notation
person.city = "Delhi";   // Add
person.age = 23;         // Update
delete person.isStudent;
console.log("name" in person); // true
let car = { brand: "Tesla", model: "X", year: 2024 };
console.log(Object.keys(car));   // [ 'brand', 'model', 'year' ]
console.log(Object.values(car)); // [ 'Tesla', 'X', 2024 ]
console.log(Object.entries(car));// [ [ 'brand','Tesla' ], [ 'model','X' ], [ 'year',2024 ] ]
for (let key in car) {
  console.log(key + " : " + car[key]);
}
