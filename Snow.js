class Snow{
    constructor(x, y,r) {
        var options = {
            isStatic : false,
            restitution: 0.4,
            friction: 0
          
        }
        this.image = loadImage("snow4.webp")
        this.body = Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y); 
        imageMode(CENTER);
       // noStroke();
       // ellipseMode(RADIUS);
       image(this.image,0,0,this.r,this.r)
       // ellipse(0,0,this.r,this.r);
        pop();
    }
    
}


