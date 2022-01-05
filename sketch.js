const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var ball;
var buttonUP;
var buttonRight;




let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
 var options={
   restitution:0.96
 }


 ball=Bodies.circle(200,100,20,options)
World.add(world,ball)


  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  buttonUP=createImg("up.png")
  buttonUP.position(220,30)
  buttonUP.size(50,50)
  buttonUP.mouseClicked(vForce)


  buttonRight=createImg("right.png")
  buttonRight.position(120,30)
  buttonRight.size(50,50)
  buttonRight.mouseClicked(hForce)


}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)

}

function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter .Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}







