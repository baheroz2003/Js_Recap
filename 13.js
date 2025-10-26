JavaScript Try–Catch–Finally Notes:
try...catch ka use error handling ke liye hota hai.
Kabhi user galat input deta hai ya koi unexpected error aata hai — usko crash hone se bachane ke liye ye use karte hain.
try {
  // Code jo error de sakta hai
} 
catch (error) {
  // Error handle yahan hota hai
} 
finally {
  // Har case me chalta hai (error ho ya na ho)
}
-----------------------------------------------
function convertToNumber(input) {
  try {
    // String ko number me convert karo
    let num = Number(input);

    // Agar conversion NaN hua toh manually error throw karo
    if (isNaN(num)) {
      throw new SyntaxError("Invalid number format");
    }

    console.log("Converted number:", num);
    return num;
  } 
  catch (err) {
    console.log("❌ Error caught:", err.message);
  } 
  finally {
    console.log("✅ Finally block executed");
  }
}
convertToNumber("123");  // ✅ Works fine
convertToNumber("abc");  // ❌ Error handled in catch
-------------------------------------------------------------------------------
By default, string input append hota hai, isliye use Number() se convert karte hain.
Invalid number hone par isNaN() se check karo aur throw se error create karo.
catch block error handle karta hai — program crash nahi hota.
finally block hamesha chalta hai — chahe error aaye ya nahi.
Agar function me return likha ho, tab bhi finally execute hota hai.
--------------------------------------------------------------------------------
