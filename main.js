/* TASK1 */

var a = 15;
var b = -2;
var c = 22;
var d = 0;
var e = 13;

if (a>b && a>c && a>d && a>e) {
	console.log("Largest number is " + a )
}

else if (b>a && b>c && b>d && b>e) {
	console.log("Largest number is " + b)
}

else if (c>a && c>b && c>d && c>e) {
	console.log("Largest number is " + c)
}

else if (d>a && d>b && d>c && d>e) {
	console.log("Largest number is " + d)
}

else if (e>a && e>b && e>c && e>d) {
	console.log("Largest number is " + e)
}

else {
	console.log ("Largest number is unknow")
}

/* TASK2 */

var a = 3;
var b = -7;
var c = 2;

if (a<0) {
	console.log (a)
}

else if (b<0) {
	console.log (b)
}

else if (c<0) {
	console.log (c)
}

else {
	console.log ("Number is unknow")
}


/* TASK3 */

var name = "Hello world";

switch(name) {
	case "Hello world":
		console.log(name)
	case "Hello world":
		console.log("Ciao Mondo")
	case "Hello world":
		console.log("Hola Mondo")
	case "Hello world":
		console.log("Hallo Welt")
	case "Hello world":
		console.log("Sawubona Mhlaba")
}

/* TASK4 */
/* TERNARY */

var userAge = 35;

userAge >= 28 ? console.log(true) : console.log(false);

/* IF/ELSE */

var userAge = true;

if (userAge === false) {
	console.log("User is less than 28 years old")
}

if (userAge === true) {
	console.log("User is older than 28")
}

else {
	console.log("User age is unknow")
}

