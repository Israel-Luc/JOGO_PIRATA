const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower, towerImg;
var backgroundImg;
var cannon;
var angle = 20;
var cannonBall;

function preload() {
backgroundImg = loadImage("./assets/background.gif");
towerImg = loadImage("./assets/tower.png");
}

function setup() {
  createCanvas(1365,650);

  engine = Engine.create();
  world = engine.world;

  var tower_options = {
    isStatic: true
  }

  tower = Bodies.rectangle(160, 380, 160, 290, tower_options);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  cannon = new Cannon(180, 110, 250, 100, angle);
  //angle = -PI/4;

  cannonBall = new CannonBall(cannon.x, cannon.y);

  angleMode(DEGREES);
  angle = 20;
}

function draw() 
{
  background(51);
  Engine.update(engine);

 image(backgroundImg, 0,0, width, height);

//  rect(tower.position.x, tower.position.y, 160, 310);
 
 push();
 imageMode(CENTER);
 image(towerImg, tower.position.x, tower.position.y, 170, 380);
 pop();

 cannon.display();

 cannonBall.display();

 KeyReleased();
}

function KeyReleased(){
  if(keyCode == DOWN_ARROW){
    cannonBall.shoot()
  }
}