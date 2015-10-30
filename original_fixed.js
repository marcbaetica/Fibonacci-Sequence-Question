//Generate a Fibonacci Sequence up to 4 million and return the sum of all its even numbers
//version 1 - initial solution FIXED


var evenSum = 0;  //this gets returned and printed at the end 
var variable1 = 0;  //first "pointer" variable starting at 0
var variable2 = 1;  //second "pointer" variable starting at 1
var maxSeqSize = 4*Math.pow(10, 6); //global variable for the max number allowed

//initiate the sequence, generate sum of all even events and logs the final sum in the console
(function () {

  //generates Fibonaci Sequence two values at a time 
  while (variable1 < maxSeqSize && variable2 < maxSeqSize) {	//repeat until one of the new values goes over 4million
  	console.log(variable1);
  	console.log(variable2);

    //checks if either of the two variables are even and adds that number to the final sum
    checkIfEven(variable1);
    checkIfEven(variable2);


    //two new numbers get generated in one loop
    variable1 += variable2;
    variable2 += variable1;
  }

  //if variable1 passes as under 4 mil but variable2 doesnt, we need to make sure variable1 gets checked anyway just in case it passes as an even number and is eligible to be added
  if (variable1<4*Math.pow(10, 6)) checkIfEven(variable1);

  //returns the final evenSum
  console.log("\nThe final sum of even numbers is: " + evenSum);
}) ()


//checks if the new number is even and adds it to the final sum
function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
    console.log("Found and added a new even number: " + num + "; Sum is now: " + evenSum);
  } 
}