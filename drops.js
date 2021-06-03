class Drops{
    constructor(x,y){
        var options = {

            restitution:0.3,
            friction:0.1,
            density:1
        };
        
        this.body = Bodies.circle(x, y, 20,  options);
     //   this.radius = radius*2
      //  this.width= width
      //  this.height= height
        this.drops = []
        World.add(world, this.body);
    }
    

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");

      //  var position=[this.body.position.x,this.body.position.y]
       // this.drops.push(position)
        // rect(0, 0, this.width, this.height);

        ellipse(0,0,20,20)
      // circle(0,0,10)
        pop();
    }
}
