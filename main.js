//TASK1

function Student(name, lastName, age, averageGrade){
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
}

var nikola = new Student("Nikola", "Nikolic", 23, 8.56);
var marko = new Student("Marko", "Markovic", 22, 8.87);
var mirko = new Student("Mirko","Mirkovic", 26, 7.66);
var petar = new Student("Petar", "Petrovic", 24, 9.33);

console.log(nikola, marko, mirko, petar);

//TASK2

function FootballPlayer(name, lastName, age, position, number, goalScored, yellowCards){
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.position = position;
	this.number = number;
	this.goalScored = goalScored;
	this.yellowCards = yellowCards;
}

var chiellini = new FootballPlayer("Giorgio", "Chiellini", 35, "defender", 3, 1, 1);
var deLigt = new FootballPlayer("Matthijs", "de Ligt", 20, "defender", 4, 1, 3);
var pjanic = new FootballPlayer("Miralem", "Pjanic", 29, "midfielder", 5, 3, 7);
var dybala = new FootballPlayer("Paulo", "Dybala", 26, "forward", 10, 9, 3);
var ronaldo = new FootballPlayer("Cristiano", "Ronaldo", 34, "forward", 7, 16, 0);

console.log(chiellini, deLigt, pjanic, dybala, ronaldo);

//TAKS3

function FootballPlayerData(member){
	this.name = member[0];
	this.lastName = member[1];
	this.age = member[2];
	this.position = member[3];
	this.number = member[4];
	this.goalScored = member[5];
	this.yellowCards = member[6];
}

var players = [["Giorgio", "Chiellini", 35, "defender", 3, 1, 1],
["Matthijs", "deLigt", 20, "defender", 4, 1, 3],
["Miralem", "Pjanic", 29, "midfielder", 5, 3, 7],
["Paulo", "Dybala", 26, "forward", 10, 9, 3],
["Cristiano", "Ronaldo", 34, "forward", 7, 16, 0]];

for(var i = 0; i < players.length; i++){
	this[players[i][1].toLowerCase()] = new FootballPlayerData(players[i]);
}

console.log(chiellini, deligt, pjanic, dybala, ronaldo);

//TASK4

function ConFun(firstNum, secondNum, calculate){
	this.firstNum = firstNum;
	this.secondNum = secondNum;
	this.calculate = calculate;
}
	var multiPly = new ConFun(5, 8,
	function calculate(){
		var result = this.firstNum * this.secondNum;
		return result;
	})
	var divid = new ConFun(78, 3,
		function calculate(){
		var result = this.firstNum / this.secondNum;
		return result;
	});
	var add = new ConFun(55, 95,
		function calculate(){
		var result = this.firstNum + this.secondNum;
		return result;
	});
	var subTrack = new ConFun(12, 15,
		function calculate(){
		var result = this.firstNum - this.secondNum;
		return result;
	});

	console.log(multiPly.calculate(), divid.calculate(), add.calculate(), subTrack.calculate());
