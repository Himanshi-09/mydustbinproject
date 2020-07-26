
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3;
var paperball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,height,800,20);
	box1 = new dustbin(600,600,200,20);
	box2 = new dustbin(510,540,20,100);
	box3 = new dustbin(690,540,20,100);
    paperball = new paper(100,500,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paperball.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:45,y:-40});
	}
}



