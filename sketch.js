const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower,canon;



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(1200,600);
  angle = -PI/4
  engine = Engine.create();
  world = engine.world;

  canon = new Canon(180,110,50,50,angle)
  tower = new Tower(150, 350, 160, 310);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
    tower.display();
    canon.display();
 
}

