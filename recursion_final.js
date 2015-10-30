//Generate a Fibonacci Sequence up to 4 million and return the sum of all its even numbers
//version 2 - using Mr Jabbour's recursive function


var value = findFibByIndex(7);
console.log(value);

//for every value calculated we check
(function () {
	findFibByIndex();
}) ()


//index running from 1 to whatever
function findFibByIndex (index) {
	if (index === 0) {
		return 0;
	} else if (index === 1) {
		return 1;
	}
	return (findFibByIndex(index-1) + findFibByIndex(index-2));
}