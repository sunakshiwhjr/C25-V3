class CannonBall
{

    constructor(x,y)
    {
        var options = {

           
            friction:1,
            density:1,
            restitution:0.8,
            isStatic: true,
        }
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        this.cannonBall = loadImage("assets/cannonball.png");
        this.image = loadImage("./assets/cannonball.png");
        this.trajectory = [];
        World.add(myWorld, this.body);
        
    }

    shoot()
    {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }

    display()
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.cannonBall,0,0, this.r, this.r);
        pop();


        if(this.body.velocity.x > 0 && this.body.position.x > 180)
        {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }


        for(var i=0; i<this.trajectory.length; i++)
        {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5)
        }
    }

}