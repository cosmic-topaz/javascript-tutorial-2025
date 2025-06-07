
let x = prompt("x?", "");
let n = prompt("n?", "");

alert(pow(x, n));

function pow(x, n) {
  if (n <=0) {
    return `Power ${n} is not supported, please enter an integer number greater than zero`;
  }
  return x ** n;
}