// store the count-el element in a countEl variable
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
	count = count + 1;
	// set countEl's innerText to the count
	countEl.innerText = count;
};

// Create a function, save(), which logs out the count when it's called 
function save() {
	console.log(count);
};

let welcomeEl = document.getElementById('welcome-el');
let name = 'user';
let greeting = 'Thanks for stopping by, '
welcomeEl.innerText = greeting + name + '!';

welcomeEl.innerText = welcomeEl.innerText + ' 👋'