// universe - planet - obj
// engine - world - bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var box,ground;

var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    
    isStatic : true
  }

  var ballopt = {

 restitution:1.0

  }

  box = Bodies.rectangle(200,100,50,50,ballopt);
  World.add(world,box);

  
  ground = Bodies.rectangle(200,370,400,30,options);
  World.add(world,ground);

  ball = Bodies.circle(100,100,30,ballopt);
  World.add(world,ball);
  
  console.log(box);
  console.log(box.position.x);
  console.log(box.position.y);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
 rect(box.position.x,box.position.y,50,50);
 
 rect(ground.position.x,ground.position.y,400,30);
 
 ellipseMode(RADIUS);

 ellipse(ball.position.x,ball.position.y,30,30);

}

// static and dynamic 
