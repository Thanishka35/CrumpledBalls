
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;
var can,canIMG
var ball;
var ground;
var engine, world;

function preload()
{
	canIMG = loadImage("can.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Can(650,680, 100,20);
	side2 = new Can(590,620, 20,200);
	side3 = new Can(710,620, 20,200);
	ground = new Ground(400,height,800,20);
	ball = new Ball(100,100,7);
	can = createSprite(650,590,10,15);
	can.addImage(canIMG);
	can.scale = 0.6;
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  ball.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5});
	}
}



