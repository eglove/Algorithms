// We have a loud talking parrot. The "hour" parameter is the current hour
// time in the range 0..23. We are in trouble if the parrot is talking and
// the hour is before 7 or after 20. Return true if we are in trouble.

// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour) {
	return talking === true && (hour < 7 || hour > 20);
}

console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));
