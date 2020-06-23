var bullet,wall,thickness;
var speed,weight
var Damage
var lbullet,lball;
var bulletB,wallB;

function setup() {
  createCanvas(1600,800);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor= "white";
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80) ;
  speed= random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255); 
 bullet.velocityX = speed;
 

 if(hasCollided(bullet,wall)){
  var Damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  bullet.velocityX = 0;
  bullet.collide(wall);
  
  if (Damage>10){
   bullet.shapeColor=color(255,0,0);
  }
 
   if (Damage<10){
    bullet.shapeColor= color(0,255,0);
  }

}
 
  drawSprites();
}

function hasCollided(lball,lbullet){

  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
 return false;
}


