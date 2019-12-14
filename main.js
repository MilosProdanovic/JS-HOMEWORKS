//TASK1

var person = {
	name: "Mike",
	age: 28,
	married: true
}
function print(){
	person.age = 34;
	delete person.married;
	console.log(person);
}
print();

//TASK2

var personOne = {
	name: "Jack",
	age: 32,
	married: true
}

function childrenData(){
	var children = [{name : "Zoran", age : 6, gender : "male"}, 
					{name : "Zorana", age : 4, gender: "female"}];	
	for(var i = 0; i < Object.length; i++){
		if(Object.keys != this.children){
			personOne.children = children;	
		}
	}console.log(personOne);
}
childrenData();

//TASK3
	
var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function exam(){
	for (var i = 0; i < students.length; i++){
		if (students[i].passed  == true ){
			console.log(students[i].name + " passed exam");
		}
	}
}

exam();

//TASK4

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function repack(){
	var names = [];
	var ages = [];
	var passed = [];
	for (var i = 0; i < students.length; i++){
		names[i] = students[i].name;
		ages[i] = students[i].age;
		passed[i] = students[i].passed;
	}console.log(names, ages, passed);
}

repack();

//TASK5

var person = {
	name: "Jack",
	age: 32,
	married: true
}

var personNew = new Object();
personNew.name = person.name;
personNew.age = person.age;
personNew.married = person.married;

console.log(personNew.age);

//TASK6

var person = {
	name: "Mike",
	age: 28,
	married: true,
	nameAge: function (){
		console.log(this.name + " " + this.age)
	}
}

console.log(person.nameAge());

//TASK7

var person = {
	objectConstructor: function(name, age, married){
		this.name = name;
		this.age = age;
		this.married = married;
		return person;
	}
};

console.log(person.objectConstructor("Djordje", 58, true));	





