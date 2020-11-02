const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var gr1;
var rope;
var hexa;

var score = 0;

var bg = "sprites/bg1.png";
var backgroundImg;
//console.log(bg);

function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;

gr1 = new Ground(600,300,200,10);

hexa = new Hexa(100,100,50,50);

rope = new Slingshot(hexa.body,{x:100,y:200});

b1 = new Block(600,275,40,40);
b2 = new Block(640,275,40,40);
b3 = new Block(680,275,40,40);
b4 = new Block(560,275,40,40);
b5 = new Block(520,275,40,40);
b6 = new Block(620,235,40,40);
b7 = new Block(580,235,40,40);
b8 = new Block(540,235,40,40);
b9 = new Block(660,235,40,40);
b10 = new Block(600,195,40,40);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
        textSize(20);
        fill("black");
        text("Destroy the Blocks By launching The Mega Block",100,30);
        fill("darkblue");
        text("SCORE : "+score,750,40);
        textSize(20);
        fill("red");
        text("Press Space to Re-Launch The Mega Block!",60 ,390);        
  

Engine.update(engine);

gr1.display();
fill("orange")
hexa.display();
rope.display();
fill("skyblue")
b1.display();
b2.display();
fill("lightgreen")
b3.display();
b4.display();
fill("turquoise")
b5.display();
b6.display();
fill("gold")
b7.display();
b8.display();
fill("pink")
b9.display();
b10.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  //drawSprites();
  
 
}


function mouseDragged(){
  Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
  
  }
  
function mouseReleased(){
  rope.fly();
  
  
  }
  
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(hexa.body, {x:100, y:200}) 
	  rope.attach(hexa.body);
	}
  }

  
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg2.jpg";
  }
  else{
      bg = "sprites/bg1.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}