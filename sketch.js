const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject
var world;


function setup() {
createCanvas(1300, 480);
rectMode(CENTER);


engine = Engine.create();
world = engine.world;
bin1 = new bin(1080, 450, 200, 20);
 bin2 = new bin(1180, 430, 20, 100);
 bin3 = new bin(980, 430, 20, 100);
paperObject=new paper(200,250,40);
groundObject=new ground(width/2,470,width,20);
//Create a Ground


var render = Render.create({
 element: document.body,
 engine: engine,
 options: {
   width: 1200,
   height: 700,
   wireframes: false
 }
});

Engine.run(engine);
//Render.run(render);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  bin1.display();
  bin2.display();
  bin3.display();
  paperObject.display();
  groundObject.display();
 
 
 
 
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   
  }
}