class Plinko{
    constructor(x,y,width,height){
        var options={
    
          restitution: 1,
          friction: 0,
          isStatic:true
  
    }
    
      this.body= Bodies.rectangle(x,y,40,40,options)
     
     this.width = width
     this.height = height
     
     World.add(world, this.body);
    }
    display(){
    
    var pos= this.body.position
    ellipseMode(CENTER)
    push ()
    fill ("gold")
    ellipse(pos.x,pos.y,40,40)
    
    pop ()
    }
    
    }