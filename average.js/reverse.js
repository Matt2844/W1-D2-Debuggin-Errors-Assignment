
var input = process.argv.slice(2).join(" ");

let reverse = function (input) {
  return input.split("").reverse().join("");
}

console.log(reverse(input))