// TASK1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i = 0;

while (i < dataOld.length) {
	dataNew[i] = dataOld[i];
	i++
}
console.log(dataNew);

//TASK2

for (var i = dataOld.length -1; i >= 0; i--) {
	dataNew[dataOld.length -1 -i] = dataOld[i];
}
	console.log(dataNew);

//TASK3

var dataNew = [12, "Jack"];

for (var i = 0; i < dataOld.length; i++) {
	dataNew[dataNew.length] = dataOld[i];
}
 	console.log(dataNew);

//TASK4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var newArr = [];

for (var i = 0; i < a.length; i++) {
	newArr[i] = a[i];
}
for (var j = 0; j <= a.length - b.length; j++) {
	newArr[newArr.length] = b[j];
}
	console.log(newArr);

//TASK5

var a = [12, 56, 32, 44];
var newArr = [];

for (var i = 0; i < a.length; i++) {
	newArr[i+i] = a[i];
}
for (var j = 0; j < b.length; j++) {
			newArr[j + j + 1] = b[j];	
}
	console.log(newArr); 

//TASK6

var a = "*";

for (var i = 0; i < 6; i++) {
	console.log(a);
	a += "*"; 
}

//TASK7

var result = "";

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 10; j++) {
    if (i > 0 && i < 5 && j > 0 && j < 9) {
      result += " ";
    } else {
      result += "*";
    }
  }
  result += "\n";
}
console.log(result);


	 	
	
	

	


