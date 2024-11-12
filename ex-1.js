function addStrings(num1, num2) {
  newString = String(Number(num1) +Number(num2))
  return newString
}

let result1 = addStrings("11", "123");
let result2 = addStrings("456", "77");
let result3 = addStrings("0", "0");

console.log(typeof result1 ,result1); // "134"
console.log(typeof result2 ,result2); // "533"
console.log(typeof result3 ,result3); // "0"
