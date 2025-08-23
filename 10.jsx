JavaScript me event listener ek aisi cheez hai jo sun rahi hoti hai ki user kya kar raha hai (jaise click, hover, typing, scroll, etc.).
Jab event hota hai → wo ek function run karta hai (jo humne diya hai).
element.addEventListener("event-type", function);
element → HTML element (button, div, input, etc.)
event-type → "click", "mouseover", "keydown", etc.
function → jo kaam karna hai jab event ho
Example 1: Button Click
<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Button click hua!");
  });
</script>
Example 2: Mouse Hover
<div id="box" style="width:100px; height:100px; background:blue;"></div>
<script>
  document.getElementById("box").addEventListener("mouseover", () => {
    document.getElementById("box").style.background = "green";
  });
</script>
Example 3: Keyboard Events
<input type="text" id="inputBox" placeholder="Type something...">
<script>
  document.getElementById("inputBox").addEventListener("keydown", (event) => {
    console.log("Key press hui:", event.key);
  });
</script>
Example 4: Multiple Listeners on Same Element
let btn = document.getElementById("btn");
btn.addEventListener("click", () => console.log("Button clicked!"));
btn.addEventListener("mouseover", () => console.log("Mouse upar gaya!"));
addEventListener → best hai, kyunki multiple functions add kar sakte ho ek element ke liye.
removeEventListener se listener hata bhi sakte ho.
--------------------------------------------------------
click	Jab user click kare
dblclick	Double click kare
mouseover	Jab mouse element ke upar aaye
mouseout	Jab mouse element se bahar jaye
keydown	Jab koi key press ho
keyup	Jab key chhodi jaye
input	Jab input field me kuch type ho
submit	Form submit hone pe
scroll	Jab page scroll ho
---------------------------------------------------------
Normal situation me kuch HTML elements ka default behavior hota hai:
Form → submit hote hi page reload ho jaata hai
<a> link → click hote hi doosre page pe chala jaata hai
Agar tumhe wo default behavior rokna hai, to event.preventDefault() use karte ho.
<form id="myForm">
  <input type="text" placeholder="Enter something..." required />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ❌ page reload nahi hoga
    alert("Form submit hua, lekin page reload nahi hua!");
  });
</script>
----------------------------------------------------------------
window object kya hai?
JavaScript me browser ka global object window hai.
Matlab browser me jo bhi global variables/functions likhe jaate hain, wo sab window ke andar automatically store hote hain.
Example: alert(), setTimeout(), console.log() … ye sab actually window.alert(), window.setTimeout() ke andar hote hain.
window.alert("Hello Baheroz!"); 
// Simple popup
let ans = window.confirm("Tumko Golang pasand hai?"); 
// OK/Cancel box -> true ya false return karega
let name = window.prompt("Apna naam likho:"); 
// Input lene ke liye popup
let newWin = window.open("https://google.com", "_blank"); // nayi tab khol do
// newWin.close();  // tab close karne ke liye
--------------------------------------------------------------------
<input type="text" placeholder="Type something" id="myInput" />
<script>
  document.getElementById("myInput").addEventListener("input", (e) => {
    console.log("You typed:", e.target.value);
  });
</script>
Jaise hi tum kuch type karte ho, e.target.value tumhara input ka latest text de dega.







