var evenSum = 0;
var variable1 = 0;
var variable2 = 1;

(function () {

  while (variable1 < 4*Math.pow(10, 6) && variable2 < 4*Math.pow(10, 6)) {
    checkIfEven(variable1);
    checkIfEven(variable2);
    variable1 += variable2;
    variable2 += variable1;
  }
  if (variable1<4*Math.pow(10, 6)) checkIfEven(variable1);

  console.log("\nThe final sum of even numbers is: " + evenSum);
}) ()

function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
    console.log("Found and added a new even number: " + num + "; Sum is now: " + evenSum);
  } 
}
