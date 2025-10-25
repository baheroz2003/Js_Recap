Callback function wo hoti hai jo ek function ke andar argument ke roop me pass hoti hai.
Ye tab chalti hai jab main function apna kaam complete kar leta hai.
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
function bye() {
  console.log("Goodbye!");
}
greet("Baheroz", bye);
Yahan bye ek callback function hai.
Jab ek ke baad ek callback ke andar aur callback likhne padte hain (nested callbacks),
code confusing aur unreadable ban jaata hai.
Is situation ko callback hell kehte hain.
Ye ban gaya callback hell — nested callbacks 😓
Promise callback hell ka solution hai.
Ye ek object hota hai jo future me value return karega — 
ya toh resolve (success) karega ya reject (error).
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Done!");
  else reject("Error!");
});
promise
  .then((msg) => console.log(msg)) // agar resolve hua
  .catch((err) => console.log(err)) // agar reject hua
  .finally(() => console.log("Always chalega"));
.then() → jab promise resolve hota hai (no error)
.catch() → jab promise reject hota hai (error aata hai)
.finally() → ye dono case me chalega (error ho ya na ho)
Promise Chaining
Jab ek ke baad ek .then() use karte ho toh har .then() independently execute hota hai,
par sequentially (ek ke baad ek).
doTask()
  .then(() => console.log("Step 1"))
  .then(() => console.log("Step 2"))
  .then(() => console.log("Step 3"))
  .catch((err) => console.log(err));
---------------------------------------------------------------------------------------------------------------
| Method                            | Description                                                                           
| --------------------------------- | -------------------------------------------------------------------------
| `Promise.resolve(value)`          | Ek already resolved promise return karta hai.                                         
| `Promise.reject(error)`           | Ek already rejected promise return karta hai.                                         
| `Promise.all([p1,p2,...])`        | Saare promises complete hone ka wait karta hai; agar ek bhi reject hua → sab fail.    
| `Promise.allSettled([p1,p2,...])` | Saare promises complete hone ka wait karta hai, chahe resolve ho ya reject.           
| `Promise.race([p1,p2,...])`       | Jo promise sabse pehle settle hota hai (resolve/reject) uska result return karta hai. 
| `Promise.any([p1,p2,...])`        | Pehla **resolved** promise return karta hai; sab reject ho gaye toh error deta hai.   
---------------------------------------------------------------------------------------------------------------
Resolve vs Settle
Resolve: Jab promise successfully complete ho jaye (no error).
Settle: Jab promise resolve ya reject dono me se kisi ek state me aa jaye (kaam khatam ho gaya).
🔹 Matlb har resolved promise settled hota hai,
par har settled promise zaroori nahi resolved ho, wo reject bhi ho sakta hai.






