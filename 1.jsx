var → function scoped
agar function ke andar declare kiya toh sirf us function ke andar hi chalega.
function ke bahar declare kiya toh global variable ban jaata hai.
let & const → block scoped
sirf { } ke andar hi accessible hote hain.
isse code zyada predictable banta hai.
redeclaration me only var is allowed
reassignment me var,let is allowed
const me (but objects/arrays ke andar ke values change kar sakte ho)
var → hoist hota hai with undefined
let / const → hoist hote hain but TDZ me error dete hain
Functions → poore ke poore hoist hote hain
