const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;


var  bgImg
var bg;
var engine,world;
var snow;
var man,manImg

var snow = [];

function preload(){
bgImg = loadImage("snow1.jpg")
manImg = loadImage("man.jpg")
}



function setup() {
  createCanvas(800,400);
  engine  = Engine.create();
  world = engine.world;
  
  
man = createSprite(150,310,100,50)
man.addImage("man",manImg)
man.velocityX = 0.5;
man.scale = 0.1;
  

  
  
  
}

function draw() {
  background(bgImg);  

  Engine.update(engine);

 if(frameCount%60===0){
    snow.push(new Snow(random(width/5-10,width/5+10),30,30))
  }
 
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-10,width/2+10),30,30))
  }

  if(frameCount%60===0){
    snow.push(new Snow(random(width/3-10,width/3+10),30,30))
  }

  if(frameCount%60===0){
    snow.push(new Snow(random(width/1.5-10,width/1.5+10),30,30))
  }



 for(var s=0;s<snow.length;s++){
   snow[s].display();
 }
  
 for(var s=0;s<snow.length;s++){
  snow[s].display();
}

for(var s=0;s<snow.length;s++){
  snow[s].display();
}

man.display();

  drawSprites();
}