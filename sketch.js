var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

//Crear un jugador circular, ya tiene fisicas incluidas
var player = world.createEntity({
	name : "player",
	shape : "circle",
	radius : 1,
	image: "bird.png",
	imageStretchToFit: true,
	density: 4,
	x: 2,
	onKeyDown: function(e){
		//El impulso se controla con el algoritmo genético
		this.applyImpulse(200,60);
	}
});
//El piso
world.createEntity({
	name: "ground",
	shape: "square",
	type: "static",
	color: "rgb(0,100,0)",
	width: 20,
	height: .5,
	y: 12
});
//Los bloques
var block = {
	name: "block",
	shape: "square",
	color: "brown",
	width: .5,
	height: 4,
	onImpact: function(entity,force){
		if(entity.name() == "player"){
			this.color("black");
		}
	}
};
world.createEntity(block,{
	x: 15
});

world.createEntity(block,{
	x: 17
});
world.createEntity(block,{
	x: 16,
	y: 1,
	width: 4,
	height: .5
});