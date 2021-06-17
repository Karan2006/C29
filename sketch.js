const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var fruit
var fruit_con

let engine;
let world;
let gtound;
let rope;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(250,690,500,20);
  rope = new Rope(6, {x: 245, y:0});
  var fruit_options={
    density:0.01
  }
  fruit = Bodies.circle(300,300,15,fruit_options);
  Matter.Composite.add(rope.body,fruit);
  fruit_con=new Link(rope,fruit);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();
  ellipse(fruit.position.x,fruit.position.y,15,15);
  rope.show();
   
}

