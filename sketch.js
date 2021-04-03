var canvas,bg,tom,tomimg1,tomimg2,tomimg3;
var jerry,jerryimg1,jerryimg2,jerryimg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomimg1 = loadAnimation("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3 = loadAnimation("images/cat4.png");
    jerryimg1 = loadAnimation("images/mouse1.png");
    jerryimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(900,600);
tom.addAnimation("sleeping",tomimg1)
jerry = createSprite(200,600);
jerry.addAnimation("standing",jerryimg1);
tom.scale= 0.2;
jerry.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x<(tom.width - jerry.width)/2){
    tom.velocityX = 0;
    tom.addAnimation('tomlastimage',tomimg3);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation('tomlastimage');
    jerry.addAnimation('jerrylastimage',jerryimg3);
    jerry.scale = 0.15;
    jerry.changeAnimation('jerrylastimage')
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("running",tomimg2);
      tom.changeAnimation("running");
      jerry.addAnimation("teasing",jerryimg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("teasing");
  }


}
