var backgroundImg,bombImg,bomb


function preload() {
    backgroundImg = loadImage("background.png");
bombImg=loadAnimation("2.png","1.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    bomb=createSprite(600,200,10,10)
    bomb.addAnimation("bomb1",bombImg)
bomb.scale=1
}

function draw(){
    background(backgroundImg);
    
   drawSprites()
}






