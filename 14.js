let obj = {
  a: 1,
  b: "Harry"
};
console.log(obj);
JS me object ek key–value pair hota hai.
Objects ke paas ek hidden property hoti hai — [[Prototype]] (access via __proto__).
let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal;
rabbit ne animal se inherit kiya hai.
Ab rabbit ke paas jumps ke sath–sath eats property bhi aa gayi.
Is process ko Prototype Inheritance kehte hain.
console.log(rabbit.eats); // true (inherited from animal)
class Animal {
  constructor(name) {
    this.name = name;
    console.log("object is created...");
  }
  eats() {
    console.log("kha raha hoon");
  }
  jumps() {
    console.log("kood raha hoon");
  }
}
class ek blueprint hoti hai object banane ke liye.
constructor() automatic call hota hai jab object create karte ho.
Methods class ke prototype me store hote hain (memory efficient).
class Lion extends Animal {
  constructor(name) {
    super(name); // parent class constructor call karta hai
    console.log("object is created and he is a lion...");
  }
  eats() { // method overriding
    console.log("kha rha hoon roar");
  }
}
extends keyword se inheritance hoti hai.
super() parent class ka constructor call karta hai.
Child class apne parent ke method ko override kar sakti hai.
Jab child class apne parent ke same naam ke method ko redefine kare,
use method overriding kehte hain.
l.eats(); // Output: kha rha hoon roar
Static Methods:
static keyword se banaye gaye methods class se directly call hote hain, object se nahi.
class User {
  constructor(name) {
    this.name = name; // invokes setter
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("name is too short.");
      return;
    }
    this._name = value;
  }
}
get - property access karte waqt function call hota hai.
set -property assign karte waqt function call hota hai.
_name-underscore lagake internal variable denote karte hain (avoid recursion).
let user = new User("John");
console.log(user.name);  // John
user.name = "Harry";     // Setter called
console.log(user);       // { _name: 'Harry' }
console.log(l instanceof Animal); // true
console.log(a instanceof Lion);   // false
instanceof check karta hai ki object kis class (ya prototype chain) se belong karta hai.
----------------------------------------------------------------------------------------
| Concept        | Keyword / Syntax     | Purpose                    |
| -------------- | -------------------- | -------------------------- |
| Prototype      | `__proto__`          | Property inheritance       |
| Class          | `class ClassName {}` | Blueprint for objects      |
| Constructor    | `constructor()`      | Initialization of object   |
| Inheritance    | `extends`, `super()` | Reuse parent properties    |
| Overriding     | Same method name     | Redefine parent behavior   |
| Static method  | `static`             | Call via class, not object |
| Getter/Setter  | `get`, `set`         | Controlled property access |
| Instance check | `instanceof`         | Check prototype chain      |
--------------------------------------------------------------------------------------------










  
