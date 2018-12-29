var mycanvas = document.getElementById("game");
var world = boxbox.createWorld(mycanvas);

var game = new Game(world);
game.createObjects();
/*************GENETIC ALGORITHM******************/
const POP_SIZE = 3;
const DOM_TETHA = [0,90];
const DOM_FORCE = [10,400];
const MAX_GENERATIONS = 10;
var population = [];

//Generate population
for(var i=0;i<POP_SIZE;i++){
	var newBird = game.createBird(16-i,i);
	population.push(newBird);
}

//For all generations
for(var gen=0;gen<MAX_GENERATIONS;gen++){
	//DO ALL	
}


