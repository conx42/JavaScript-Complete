import "./index.css";
let username;
function func1() {
  username = document.getElementById("myText").value;
  console.log(username);
  //now changing the label
  document.getElementById(
    "myLabel"
  ).innerHTML = `Hellow <span>${username}</span>`;
}
function func2() {
  let age;
  age = document.getElementById("myText").value;
  if (age.length === 0 || age === " ") {
    // window.prompt(`You Have to enter something!!!`);
    window.alert(`You Have to enter something!!!`);
  }
  /*Type conversion:- Convert a string into a number */
  age = Number(age);
  age += 1;
  console.log(`${age}. Type of age is:- ${typeof age}`);
  console.table(`Your age is:- ${age}`);
  age = String(age);
  age += 108;
  console.log(`${age}. Type of age is:- ${typeof age}`);
  console.table(`Your age is:- ${age}`);
}
document.getElementById("myButton").onclick = func1;

console.log("Hello World");

let x = "";
let x1 = "Zico";

//empty string boolean ee convert korley results false daay
//empty string chara jeekono string diley ee seta true tey convert hoyejaay boolean aa typecast korley

x = Boolean(x);
x1 = Boolean(x1);

console.log(`Empty string to Boolean (x):- ${x}`);
console.log(`Non-empty String to Boolean (x1):- ${x1}`);

x = 4;
x1 = 33.7983;

console.log(Math.sqrt(x));
console.log(Math.pow(x, 2));
// console.log(Math.round(x1));
console.log(Math.ceil(x1));
console.log(Math.floor(x1));
console.log(Math.sqrt(x));
console.log(Math.PI);
