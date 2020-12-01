
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both.
//
// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false

function loneTeen(a, b) {
	const aIsInRange = a >= 13 && a <= 19;
	const bIsInRange = b >= 13 && b <= 19;

	return (aIsInRange && !bIsInRange) || (bIsInRange && !aIsInRange);
}

console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));
