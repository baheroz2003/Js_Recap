DOM manipulation matlab HTML elements ko JS se control karna – add, remove, style, ya content change karna. 
Yehi power deta hai JavaScript ko web pages interactive banane ki.
Element ko select karna (find karna)
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.querySelector("selector") (first match)
document.querySelectorAll("selector") (all matches)
Content change karna
document.getElementById("title").innerText = "Hello Baheroz!";
document.getElementById("title").innerHTML = "<b>Hello Boss!</b>";
Style change karna
document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "30px";
Attribute change karna
document.getElementById("image").setAttribute("src", "new.png");
document.getElementById("link").href = "https://google.com";
Element banana / hatana
let newDiv = document.createElement("div");
newDiv.innerText = "Dynamic Div";
document.body.appendChild(newDiv);   // add to body
let removeEl = document.getElementById("oldDiv");
removeEl.remove();                   // remove element
Events ke saath DOM manipulation
<button onclick="changeText()">Click Me</button>
<p id="demo">Original text</p>
function changeText() {
  document.getElementById("demo").innerText = "Text changed after click!";
}
Imagine ek dark mode toggle button:
<button id="toggleBtn">Dark Mode</button>
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
----------------------------------------real life example-----------------------------------------------------------------------------------------------------------------------------
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Toggle</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      transition: background 0.3s, color 0.3s;
    }
    .dark-mode {
      background: #222;
      color: #fff;
    }
  </style>
</head>
<body>
  <button id="toggleBtn">Dark Mode</button>
  <script>
    document.getElementById("toggleBtn").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  </script>
</body>
</html>


  
