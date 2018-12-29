var mycanvas = document.getElementById("game");
var world = boxbox.createWorld(mycanvas);

//Crear un jugador circular
var bird = world.createEntity({
	name: "bird",
	shape: "circle",
	radius : 0.7,
	image: "bird.png",
	imageStretchToFit: true,
	density: 4,
	x : 2,
	y: 16,
	onKeyDown: function(e){
		power = 200;
		angle = 60;
		this.applyImpulse(power,angle);
	}
});

//El piso
world.createEntity({
	name: "ground",
	shape: "square",
	type: "static",
	color: "#492307",
	width: 60,
	height: 2,
	y: 19
});
/**********************************/
//Blocks

var block = {
	name: "block",
	shape: "square",
	color: "#ffae19",
	width: .5,
	height: 4,
	y : 16,
	onImpact: function(entity,force){
		if(entity.name() == "bird"){
			this.color("black");
		}
	}
};
world.createEntity(block,{
	x: 22,
	width: .5,
	height: 1,
	y: 17.5
});
world.createEntity(block,{
	x: 25,
	width: .5,
	height: 1,
	y: 17.5
});
world.createEntity(block,{
	x: 26.5,
	width: .5,
	height: 1,
	y: 17.5
});
world.createEntity(block,{
	x: 29.5,
	width: .5,
	height: 1,
	y: 17.5
});
world.createEntity(block,{
	x: 25.75,
	width: 8.7,
	height: 0.5,
	y: 17
});
world.createEntity(block,{
	x: 22,
	width: .5,
	height: 1,
	y: 16
});
world.createEntity(block,{
	x: 29.5,
	width: .5,
	height: 1,
	y: 16
});
world.createEntity(block,{
	x: 24,
	width: .5,
	height: 4,
	y: 14.5
});
world.createEntity(block,{
	x: 27.5,
	width: .5,
	height: 4,
	y: 14.5
});
world.createEntity(block,{
	x: 25.75,
	width: 2,
	height: 0.5,
	y: 16.2
});
world.createEntity(block,{
	x: 25,
	width: .3,
	height: 2,
	y: 15,
	color: "#a8fff4"
});
world.createEntity(block,{
	x: 26.5,
	width: .3,
	height: 2,
	y: 15,
	color: "#a8fff4"
});
world.createEntity(block,{
	x: 25.75,
	width: 2,
	height: 0.5,
	y: 14
});
world.createEntity(block,{
	x: 25.75,
	width: 4,
	height: 0.5,
	y: 12.5
});
world.createEntity(block,{
	x: 24,
	width: .5,
	height: 4,
	y: 10
});
world.createEntity(block,{
	x: 27.5,
	width: .5,
	height: 4,
	y: 10
});
var he = 11.4;
world.createEntity(block,{
	x: 25.75,
	width: 1.5,
	height: .5,
	y: he
});
var piggy = {
	name: "piggy",
	shape: "circle",
	radius: 0.6,
	image: "pig.png",
	imageStretchToFit: true,
	density: 4,
	x: 25.75,
	y: he
};
world.createEntity(piggy);
world.createEntity(block,{
	x: 25.75,
	width: 4,
	height: 0.5,
	y: 8
});
world.createEntity(block,{
	x: 25.75,
	width: 0.5,
	height: 2,
	y: 7.5
});