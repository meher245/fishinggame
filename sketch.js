

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var engine,world;
var fish1img,fish2img,fish3img,fish4img;
var fishingpoleimg;
var bgimg;
var score;
var score = 0;
var fishinghook;
var fishingrod;
var fishgroup;

function preload(){
    bgimg=loadImage("backgroundImg.jpg");
    fish1img=loadImage("fish1img.png");
    fish2img=loadImage("fish2img.png");
    fishingpoleimg=loadImage("fishingpoleimg.png");
    fishingrodimg=loadImage("fishingrodimg.png")
    fishinghookimg=loadImage("fishinghookimg.png")
    fish3img=loadImage("fish3img.png");
    fish4img=loadImage("fish4img.png");
}   

function setup(){
    createCanvas(600,600);

    //bg = createSprite(600,600);
    //bg.addImage(bgimg); 
    //bg.scale = 0.6;

   fishgroup = new Group();

    fishingpole=createSprite(100,100,100,100);
    fishingpole.addImage(fishingrodimg);
    fishingpole.scale=0.3;

   
    fishinghook=createSprite(150,110,50,50);
    fishinghook.addImage(fishinghookimg);
    fishinghook.scale=0.5;
  
}

function draw(){
    background(bgimg);
    stroke('black');
    strokeWeight(2);
 line(fishingpole.x+57,fishingpole.y-70,fishinghook.x+2,fishinghook.y);

    text("Score  " + score, width-100, 50)

    if(gameState === PLAY){
      if(keyDown(DOWN_ARROW)){
          fishinghook.y+=5;
      }
      if(keyDown(UP_ARROW)){
        fishinghook.y-=5;
     }
    createfish();

     if(fishgroup.isTouching(fishinghook)){
         score=score+1;

     }
    }
   
    drawSprites();

}

function createfish(){
    if(frameCount%60===0){
        var fish = createSprite(610,300,40,10);
        fish.velocityX=-4;
        fish.y=Math.round(random(200,550));
        fishgroup.add(fish);
        fish.scale=0.4;

        var rand=Math.round(random(1,4));
        switch(rand){
            case 1:fish.addImage(fish1img);
            break;
            case 2:fish.addImage(fish2img);
            break;
            case 3:fish.addImage(fish3img);
            break;
            case 4:fish.addImage(fish4img);
            break;
        }
    }
}

