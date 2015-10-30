var evenSum = 0;

(function () {
	for (var i=0; true; i++) {
		var current = findFibByIndex(i);
		checkIfEven(current);
		if (current>4*Math.pow(10,6)) break;
	}
	console.log("\nThe final sum of even numbers is: " + evenSum);

}) ()

function findFibByIndex (index) {
	if (index === 0) {
		return 0;
	} else if (index === 1) {
		return 1;
	}
	return (findFibByIndex(index-1) + findFibByIndex(index-2));
}

function checkIfEven (num) {
  if (num%2 === 0) {
    evenSum += num;
    console.log("Found and added a new even number: " + num + "; Sum is now: " + evenSum);
  } 
}