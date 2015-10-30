//Generate a Fibonacci Sequence up to 4 million and return the sum of all its even numbers
//version 1 - initial broken solution


var evenSum = 0;  //this gets returned and printed at the end 
var variable1 = 0;  //first "pointer" variable starting at 0
var variable2 = 1;  //second "pointer" variable starting at 1

console.log(returnEvenSum()); //initiate the sequence, generate sum of all even events and logs the final sum in the console

function returnEvenSum () {

  //generates Fibonaci Sequence two values at a time 
  while (variable1 < 4*10^6 && variable2 < 4*10^6) {	//repeat until one of the new values goes over 4 million
  	
  	//(problem1: 4*10^6 actually gets evaluated at 46)
  	//the caret (^) operator does the bitwise XOR between the two numbers:
  	//101000 = 40
  	//000110 = 6
  	//------- XOR
  	//101110 = 46

  	//(problem2: new values are created first checked if they pass the condition, then new values are generated and those new values get sent to the even-sum-checker without being rechecked if they pass the condition => one simple solution is reversing the order between "create two new numbers" and "check if they are even")

    //two new numbers get generated in one loop
    variable1 += variable2;
    variable2 += variable1;

    //checks if either of the two variables are even and adds that number to the final sum
    checkIfEven(variable1);
    checkIfEven(variable2);

    //just for output
  	console.log(variable1);
  	console.log(variable2);
  }

  //returns the final evenSum
  return evenSum;
}


//checks if the new number is even and adds it to the final sum
function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
  } 
}
