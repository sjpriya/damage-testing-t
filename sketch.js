var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(800, 400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

    wall=createSprite(600, 200, thickness, height/2);  
    wall.shapeColor=color(230,230,230);
}


function draw() {
  background(0);  
  if(hasCollided(bullet, wall))
  {
	  bullet.velocityX=0;
	  
	  //calculate the damage 
	  // 0.5 * weight * speed* speed/(thickness *thickness *thickness);


	  //if damage is greater than 10, make wall color red
	  // if damage is lesser than 10, make wall color green
	
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	//if (lbullet.x +lbullet.width>=lwall.x)
	//{
	//	return true;
	//}
	//return false;
}


