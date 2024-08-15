let count = 0;

// store the count-el element in a countEl variable
let countEl = getElementById("count-el");

function increment() {
	count = count + 1;
	// set countEl's innerText to the count
	countEl.innerText = count;
};

// Create a function, save(), which logs out the count when it's called 
function save() {
	console.log(count);
};