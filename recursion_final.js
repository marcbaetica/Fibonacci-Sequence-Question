//Generate a Fibonacci Sequence up to 4 million and return the sum of all its even numbers
//version 2 - using Mr Jabbour's recursive function

var evenSum = 0;

//for every value calculated we check if is even and add it to the global sum
(function () {
	for (var i=0; true; i++) {
		var current = findFibByIndex(i);	//build tree and calculate value for index
		if (current>4*Math.pow(10,6)) break;	//break the loop once the numbers become larger than 4 million
		checkIfEven(current);				//if current sequence number is even add to sum
	}
	//log the final sum in the console
	console.log("\nThe final sum of even numbers is: " + evenSum);

}) ()

//Mr Jabbour's recursive function -> build fibonacci tree and evaluate using an index running from 1 to desired index
function findFibByIndex (index) {
	if (index === 0) {
		return 0;
	} else if (index === 1) {
		return 1;
	}
	return (findFibByIndex(index-1) + findFibByIndex(index-2));
}

//checks if the new number is even and adds it to the final sum
function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
    console.log("Found and added a new even number: " + num + "; Sum is now: " + evenSum);
  } 
}