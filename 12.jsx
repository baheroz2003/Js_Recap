Promise ek object hai jo asynchronous task ko represent karta hai.
Teen states hoti hain:
⏳ Pending — abhi complete nahi hua.
✅ Resolved — success mila (promise successfully complete).
❌ Rejected — error aaya (promise fail ho gaya).
Settle: Jab promise ka kaam khatam ho jaye (ya resolve, ya reject dono me se koi ek).
Resolve: Jab promise successfully settle ho jaye.
Reject: Jab promise unsuccessfully settle ho jaye (error aaye).
Async:
async lagane se function asynchronous ban jaata hai.
Matlab ye function background me chalega aur ek Promise return karega.
async function getData() {
  return "Data mil gaya!";
}
getData().then((res) => console.log(res)); // Output: Data mil gaya!
Await:
await ka use tab hota hai jab async function ke andar koi promise return hone me time lagta hai.
await code ko pause kar deta hai jab tak wo promise resolve nahi hota.
await sirf async function ke andar hi use hota hai.
async function fetchData() {
  console.log("Data fetch start...");
  let data = await new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
  console.log(data);
  console.log("Baaki code...");
}
fetchData();
//output 
Data fetch start...
(Data aane me 2 sec delay)
Data received!
Baaki code...
Fetch API (GET & POST Example):
GET Request (by default)
Fetch API default me GET request send karti hai.
Ye ek promise return karti hai → isliye await lagate hain:
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json(); // json() bhi ek promise hai
  console.log(data);
}
getUsers();
fetch() → server se data mang raha hai.
response.json() → data ko readable JSON format me convert kar raha hai.
POST Request (data bhejna)
POST request tab use hoti hai jab hum server pe data send karna chahte hain:
async function addUser() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Baheroz Zeya",
      email: "baheroz@example.com",
    }),
  });
  let data = await response.json();
  console.log("User added:", data);
}
addUser();






