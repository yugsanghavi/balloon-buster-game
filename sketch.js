var redballoon,greenballoon,blueballoon,pinkballoon
var redballoonImage,blueballoonImage,pinkballoonImage,greenballoonImage
var backgroundImage
var bow,bowImage    


function preload(){
 //load your images here 
redballoonImage=loadImage("red_balloon0.png") 
blueballoonImage=loadImage("blue_balloon0.png")  
  pinkballoonImage=loadImage("pink_balloon0.png")
  greenballoonImage=loadImage("green_balloon0.png")
  backgroundImage=loadImage("background0.png")
  bowImage=loadImage("bow0.png")
}

function setup() {
  createCanvas(600, 600);
  
  
  background=createSprite(300,300,300,300)
  background.addImage(backgroundImage)
  background.scale=1.5
  
  
  
  
for (var i=50;i<600;i=i+70){
  redballoon=createSprite(50,i,10,40)
  redballoon.addImage(redballoonImage);
  redballoon.scale=0.1
  
  
}
  for(var i=80;i<550;i=i+70){
    blueballoon=createSprite(90,i,10,40)
    blueballoon.addImage(blueballoonImage);
    blueballoon.scale=0.1
    
  } 
 
  for ( var i=130;i<500;i=i+70){
     pinkballoon=createSprite(130,i,10,40)
  pinkballoon.addImage(pinkballoonImage)
  pinkballoon.scale=1.2
    
    
  }

  
  
  
  for ( var i=190;i<450;i=i+70) {
    
    greenballoon=createSprite(170,i,10,40)
    greenballoon.addImage(greenballoonImage)
  greenballoon.scale=0.1
  }
    bow=createSprite(550,170,10,40)
  bow.addImage(bowImage)
  
}


  

function draw() {
  bow.y=mouseY;
  //background("")
  background.velocityX=0.2
drawSprites();
  //add code here
  
}

