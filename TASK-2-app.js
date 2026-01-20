document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("input");
let Numberbtn = document.querySelectorAll(".number");
let operaterbtn = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let Delete = document.getElementById("delete");

// Numberbtn
Numberbtn.forEach((btn) => {
  btn.addEventListener("click",()=>{
  input.value=input.value+
  btn.innerText;
})
});
 
// operator
operaterbtn.forEach((btn)=>{
btn.addEventListener("click",()=>{
  if(input.value === "") return;
  let lastchar =input.value.slice(-1);
  if("+-*/".includes(lastchar))return;
  

  input.value = input.value +
  btn.innerText
})
})

// equal
equal.addEventListener("click",()=>{
  input.value = eval(input.value)
})

//clear
clear.addEventListener("click",()=>{
  input.value = "";
})

//Delete
Delete.addEventListener("click",()=>{
  input.value = input.value.slice(0 , -1);
})

});