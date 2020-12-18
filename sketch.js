
var monkey , monkey_running
var banana ,bananaImage 
var obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime;
var gamestate = "PLAY";
var invisibleGround;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(90,450,40,40);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.2;
  //monkey.debug = true;
  
  
  
  ground = createSprite(400,510,900,10);
  
 bananaGroup = new Group();
 obstacleGroup = new Group();

  
  
  
  
  
}


function draw() {
 background("white");
 text("score: " +score, 450,50);
  
if(gamestate === "PLAY") {
  if(keyDown("space") && monkey.y >= 440) {
      monkey.velocityY = -17.5;
    }
    
  
  
     monkey.velocityY = monkey.velocityY + 0.5
     monkey.collide(ground);
  
  
     if(bananaGroup.isTouching(monkey)){
       bananaGroup.destroyEach();
       
       score = score +1;
     }
   
     if(obstacleGroup.isTouching(monkey)){
       obstacleGroup.destroyEach();
       
       gamestate = "END";
         
     }
  
  
 spawnBanana();
  spawnObstacles();
  
  drawSprites();
     
}
  if(gamestate === "END"){
    textSize(24);
    fill("black");
    text("Game Over", 250,300);
  }
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  }

 function spawnBanana(){
   if(frameCount % 240 === 0){
  banana = createSprite(600,300,40,40);
  banana.y = Math.round(random(240,440));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -4;
  banana.lifetime =  300;
     
  bananaGroup.add(banana);
     
    

}
 }

 function spawnObstacles(){
  if(frameCount % 200 === 0){
    obstacle = createSprite(600,470,30,30);
   //obstacle.y = Math.round(random(300,390));
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
    
    obstacle.debug = true;
  }
   
  
  
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  







