const players = [{
	img:"AlexSandro.jpg",
	name: "Alex",
	lastName: "Sandro",
	position: "Defender",
	number: 12,
	age: 29
},
{
	img: "Bentancur.jpg",
	name: "Rodrigo",
	lastName: "Bentancur",
	position: "Midlfilder",
	number: 30,
	age: 22
},
{
	img: "Bonucci.jpg",
	name: "Leonardo",
	lastName: "Bonucci",
	position: "Defender",
	number: 19,
	age: 32
},
{
	img: "Buffon.jpg",
	name: "Gianluigi",
	lastName: "Buffon",
	position: "Goalkeeper",
	number: 77,
	age: 41
},
{
	img: "Cuadrado.jpg",
	name: "Juan",
	lastName: "Cuadrado",
	position: "Defender",
	number: 16,
	age: 31
},
{
	img: "DeLigt.jpg",
	name: "Matthijs",
	lastName: "de Ligt",
	position: "Defender",
	number: 4,
	age: 20
},
{
	img: "DouglasCosta.jpg",
	name: "Douglas",
	lastName: "Costa",
	position: "Forward",
	number: 11,
	age: 29
},
{
	img: "Dybala.jpg",
	name: "Paulo",
	lastName: "Dybala",
	position: "Forward",
	number: 10,
	age: 26
},
{
	img: "Higuain.jpg",
	name: "Gonzalo",
	lastName: "Higuain",
	position: "Forward",
	number: 21,
	age: 32
},
{
	img: "Matuidi.jpg",
	name: "Blaise",
	lastName: "Matuidi",
	position: "Midfilder",
	number: 14,
	age: 32
},
{
	img: "Pjanic.jpg",
	name: "Miralem",
	lastName: "Pjanić",
	position: "Midfilder",
	number: 5,
	age: 29
},
{
	img: "Rabiot.jpg",
	name: "Adrien",
	lastName: "Rabiot", 
	position: "Midfilder",
	number: 25,
	age: 24
},
{
	img: "Ramsey.jpg",
	name: "Aaron",
	lastName: "Ramsey",
	position: "Midfilder",
	number: 8,
	age: 29
},
{
	img: "Ronaldo.jpg",
	name: "Cristiano",
	lastName: "Ronaldo",
	position: "Forward",
	number: 7,
	age: 34
},
{
	img: "Szczesny.jpg",
	name: "Wojciech",
	lastName: "Szczęsny",
	position: "Goalkeeper",
	number: 1,
	age: 29
}];

const getRandomNumber = arr => Math.floor(Math.random() * arr.length);

const addPlayers = () => {
	while(players.length){
		let firstSquad = document.querySelector('.first-squad');
		let substitutions = document.querySelector('.substitutions');
		
		let randomNumber = getRandomNumber(players);
		let container = players.length > 4 ? firstSquad : substitutions;
		
		container.appendChild(createPlayer(players[randomNumber]));
		players.splice(randomNumber, 1);
	}
};

const createPlayer = (playerData = []) => {
	let player = document.createElement('div');
	player.classList.add('player');
	
	let img = `<img src ="img/${playerData.img}" alt= ""/>`;
	let name = `<div> ${playerData.name} ${playerData.lastName} </div>`;
	let num = `<div>Number: ${playerData.number} </div>`;
	let position = `<div>Position: ${playerData.position} </div>`;
	let age = `<div>Age: ${playerData.age} </div>`;
	
	player.innerHTML = img + name + num + position + age;
	return player;
};

addPlayers();

setInterval(() => {
	let firstSquad = document.querySelectorAll('.first-squad .player');
	let substitutions = document.querySelectorAll('.substitutions .player');
	
	let firstSquadNumber = getRandomNumber(firstSquad);
	let substitutionsNumber = getRandomNumber(substitutions);
	
	let firstSquadPlayer = firstSquad[firstSquadNumber];
	let substitutionPlayer = substitutions[substitutionsNumber];
	
	let subPrevious  = substitutionPlayer.previousSibling;
	let subNext = substitutionPlayer.nextSibling;
	
	firstSquadPlayer.after(substitutionPlayer);
	subPrevious ? subPrevious.after(firstSquadPlayer) : subNext.before(firstSquadPlayer);
}, 5000);





