const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
backgroundImg = loadImage("Loading.jpg")
getImage();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(400,600,800,20)
	Engine.run(engine);
platform = new Ground(700,150,200,40)
}


function draw() {
  background(backgroundImg)
  rectMode(CENTER);
  ground1.display();
  platform.display();
  text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
 fill("red")

}

async function getImage(){
var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var respondJSON = await respond.json()
//console.log(respondJSON)
var time = respondJSON.datetime
//console.log(time)
var hour = time.slice(11,13)
console.log(hour)
if(hour >= 05 && hour <= 06){
bg = "imagesandsounds/Sunrise.jpg"
}
else if (hour >= 07 && hour <= 12){
bg = "imagesandsounds/Suninthesky.jpg"
}
else if(hour >= 12 && hour <= 16){
bg = "imagesandsounds/Afternoon.jpg"
}
else if(hour >= 17 && hour <= 18){
bg = "imagesandsounds/Sunset.jpg"
}
else{
bg = "imagesandsounds/Night.jpg"
}
backgroundImg = loadImage(bg)
}