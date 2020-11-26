var bullet,wall;
var speed,weight;
var damage;
var thickness;


function setup() {
  createCanvas(1400,400);
  
  //thickness
  thickness=random(22,83);

  //speed
  speed=random(223,321);

  //weight
  weight=random(30,52);

  //bullet
  bullet=createSprite(100,200,40,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  //wall
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor="yellow";
}


function draw() {
  background(0);

  if(isTouching(wall,bullet)){
    bullet.velocityX=0;

    //damage
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>=10){
    wall.shapeColor="green";
  }

  if(damage<=10){
    wall.shapeColor="red";
  }
}

  drawSprites();
}