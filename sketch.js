var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,100,400,20);

	bob5 = new Bob(260,500,30);
	bob1 = new Bob(320,500,30);
	bob2 = new Bob(380,500,30);
	bob3= new Bob(440,500,30);
	bob4= new Bob(500,500,30);

   bobDiameter = 40;

	//rope = new Rope(bob.body,{x:260,y:400},-bobDiameter*2,0);
	rope1 = new Rope(bob5.body, ground.body, -160, 0);
	 rope2 = new Rope(bob1.body, ground.body, -80, 0); 
	 rope3 = new Rope(bob2.body, ground.body, 0, 0); 
	 rope4 = new Rope(bob3.body, ground.body, 80, 0);
	 rope5 = new Rope(bob4.body, ground.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();

  bob5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 
  
  drawSprites();

  fill("black");
  stroke("white");
  text("Note: PRESS SPACE KEY TO MAKE THE NEWTON'S CRADLE WORK!",170,70,300,40);
  
 
}
function keyPressed() {
	if (keyCode === 32) {
	   Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-55,y:-55})
	   
	 }
	 
	}


