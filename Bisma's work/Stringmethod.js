// String are immutable in JS. If we make a change to a string. we create a new String. Old string remain same.
let msg = "  Hello  ";
msg.trim();
console.log(msg);
// ToUpper case method
 console.log(msg.toUpperCase());
// To Lower Case method
console.log(msg.toLowerCase());
// chaining method
console.log(msg.trim().toLowerCase());
// slice method // vs code is doing include spaces here.
console.log(msg.slice(2, 4));
// Replace method
console.log(msg.replace('H','y'));
// Repeat method
console.log(msg.repeat(3));