var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200,200,thickness,100);
  
   car.velocityX=speed;

   speed=random(223,321);
   weight=random(30,52);
}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor="white";
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor="white";
    }
    if(deformation>100)
    {
      bullet.shapeColor="white";
    }
  }

  if(hasCollided(bullet,wall))
  {
 bullet.velocityX=0;
 var damge=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }
  if(damage>10)
  {
  wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
  wall.shapeColor=color(0.,255,0);
  }

  drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}