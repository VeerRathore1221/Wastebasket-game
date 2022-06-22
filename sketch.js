
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	ball = Bodies.circle(100, 200, 10, ball_options)
	World.add(world, ball)


	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20)

	leftside = new Ground(400, 600, 20, 120)
	rightside = new Ground(600, 600, 20, 120)
	Engine.run(engine);
  
}


function draw() {
  	background(0);
  	ellipse(ball.position.x, ball.position.y, 30, 30)
  	ground.display()
	leftside.display()
	rightside.display()
  	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:7, y:-30})
	}
}


