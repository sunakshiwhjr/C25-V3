const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var myEngine, myWorld;

var tower, ground, cannon;

var bgImg, towerImage, cannonball;

var balls = [];

function preload()
{
    bgImg = loadImage("assets/background.gif");
    towerImage = loadImage("./assets/tower.png");
   
}

function setup()
{

    createCanvas(1200, 600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    angle = -PI/4;
    tower = new Tower(150, 420, 180, 310)

  //  ground = new Ground(600, 580, 1200, 20);

    cannon = new Cannon(180, 190, 110, 50, angle);

    cannonball = new CannonBall(cannon.x, cannon.y);

}



function draw()
{
    background("black");
    Engine.update(myEngine);
  //  ground.display();
    image(bgImg,0, 0, width, height);
    tower.display();
 
    for(var i =0; i < balls.length; i++)
    {
   
       showCannonBalls(balls[i],i);
    }


 

 cannon.display();

   // cannonball.display();
}

function showCannonBalls(cannonball,i)
{
    cannonball.display();
    if(cannonball.body.position.x >=width-100 || cannonball.body.position.y >=height)
    {
       World.remove(myWorld, cannonball.body);
       balls.splice(i,1)
    }
}

function keyPressed()
{
    if(keyCode === DOWN_ARROW)
    {
       
        var cannonball = new CannonBall(cannon.x, cannon.y);
        balls.push(cannonball);
    }
}


function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
        balls[balls.length - 1].shoot();
    }
}