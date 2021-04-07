class Particles{
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.2
      }
     
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.color = color(random(10,255)),color(random(0,255)),color(random(0,255));
      this.width=width
      this.height=height
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
     
     
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 20, 20);
    }
  };