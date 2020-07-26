class paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 0.4,
            density:0.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        //var pos = this.body.position;
     
        //ellipseMODE(CENTER);
        fill ("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}