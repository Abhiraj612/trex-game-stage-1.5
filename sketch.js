//creating variables for sprite
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


// preloaded image and animation
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}
//creating canvas
function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
   //creating invisible ground
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
}


//creating background and console log
function draw() {
  background(220);

  console.log(trex.y);
  //jump when the space button is pressed
  if (keyDown("space")&&trex.y >= 100) { 
    trex.velocityY = -10;
  }
  
  //writing the y velocity for the trex
  trex.velocityY = trex.velocityY + 0.8


  //making the ground value infinite
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //making the trex collide with the invisible ground
  trex.collide(invisibleGround);
  drawSprites();
}