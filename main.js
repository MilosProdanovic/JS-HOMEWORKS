// // TASK1

// function aleRt(){
// 	if(navigator.onLine === true){
// 		alert("Browser is online");
// 	}if(navigator.onLine === false){
// 		alert("browser is not online")
// 	}
// }

// aleRt();

// // TASK2

// function reLoad(){
// 	location.reload();
// }

// reLoad();

// // TASK3

// function redirect(){
// 	location.href = "http://www.google.com";
// }
//  function goBack(){
//  	history.back()
//  }

// setTimeout(redirect, 3000);
// setTimeout(goBack, 3000);

// // TASK4

// var i = 0;

// function incre(){
// 	i++;
// 	console.log(i);
// 	if(i === 15){
// 		clearInterval(int);
// 	}
// }

// var int = setInterval(incre, 1000);

// //TASK5

// function ranDom(){
// 	 var i = Math.round(Math.random() * 10);
// 	 return i;
// }

// console.log(ranDom());

// TASK6

var arrObj = [{
	name: "Jo",
	age: 33,
	status: "inactive"
},
{
	name: "Jack",
	age: 32,
	status: "inactive"
},
{
	name: "William",
	age: 31,
	status: "inactive"
},
{
	name: "Averell",
	age: 30,
	status: "inactive"
},
{
	name: "Lucky",
	age: 34,
	status: "inactive"
}];

var name = prompt("Enter your name");

function check(arr){
	return arr.name !== name;
}

function print(obj){
	var dataName = arrObj.every(check);
	if(dataName === true){
		console.log("User with name " + name + " doesn't exist.");
	}
	for(var i = 0; i < obj.length;i++){
		if(name === obj[i].name){
			var newUser = obj[i];
			newUser.status = "active";
			localStorage.setItem("loggedInUser", "active");
		}	
	}
};

print(arrObj);

function clearData(){
	localStorage.removeItem("loggedInUser");
	console.log("User is logged out")
}
setTimeout(clearData, 60000);