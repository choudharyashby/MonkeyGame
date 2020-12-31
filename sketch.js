var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, food
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(40,300,1,1);
 monkey.addAnimation("running",monkey_running);
    monkey.scale =0.1;

  ground = createSprite(300,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
    console.log(ground.x);
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(225);
  
  
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY = - 12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(obstacleGroup.isTouching(monkey)){
      monkey.velocityX = 0;
      monkey.velocityY = 0;
     ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
 stroke("white");
  textSize(20);
  fill("white")
  text("score:"+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survial Time:"+ survivalTime,100,50);
  
    food();
  obstacles();
  
  monkey.collide(ground);
  
  drawSprites();

}

function food() {
  if(frameCount % 80=== 0){
    banana = createSprite(400,180 ,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.lifetime = 300;
    banana.scale =  0.1;
    FoodGroup.add(banana);
  }
}
function obstacles() {
  if(frameCount % 80 === 0){
    obstacle = createSprite(400,330,40,100);  
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacle.scale = 0.15;
    obstacleGroup.add(obstacle);
  }
}