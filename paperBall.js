class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
       circle(0,0,30,30);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}