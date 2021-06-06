var world,engine,body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;


	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {'restitution':3,isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
Engine.update(engine);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.velocityY = +5;
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	var angle = packageSprite.angle 
	push();
	translate(packageBody.position.x,packageBody.position.y);
	rotate(angle);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {'restitution':3});
	pop();     
	World.add(world, packageBody);
    
  }
}	