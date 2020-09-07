const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, stand;

function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);

  ground = new Ground(400,370,800,20);
  World.add(world,ground);

  stand = new Ground(50,200,100,20);
  World.add(world,stand);

  //level one
  block1 = new Box(360,275,30,40);
  block2 = new Box(390,275,30,40);
  block3 = new Box(420,275,30,40);
  

  //level two
  block5 = new Box(330,235,30,40);
  block6 = new Box(360,230,30,40);
  block7 = new Box(390,235,30,40);
  block8 = new Box(420,235,30,40);
  block9 = new Box(450,235,30,40);

  //top
  block10 = new Box(390,195,30,40);

  //polygon holder
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200})
}

function draw() {
  background(255,255,255);  

  ground.display();
  stand.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.polygon);
  }
}