

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var plinkos = []
var particles = []

function setup() {
  createCanvas(700,700);
     engine = Engine.create();
    world = engine.world;

ground = new Ground(400,650,800,30)
d0 = new Division(0,530,20,210)
d1 = new Division(140,530,20,210)
d2 = new Division(280,530,20,210)
d3 = new Division(420,530,20,210)
d4= new Division(560,530,20,210)
d5= new Division(700,530,20,210)

for (var l = 40; l <=width-0; l=l+90){
  plinkos.push(new Plinko(l,75))
}
for (var l = 20; l <=width-010; l=l+100){
  plinkos.push(new Plinko(l,175))
}
for (var l = 30; l <=width-0; l=l+90){
  plinkos.push(new Plinko(l,275))
}
for (var l = 50; l <=width-0; l=l+100){
  plinkos.push(new Plinko(l,350))
}


}


function draw() {
  background("purple");  
  Engine.update(engine);
  
  if(frameCount%80===0){

    particles.push(new Particles(random(width/2-100,width/2+100),10))
  }
  
  for(var l=0; l<plinkos.length; l++){
    plinkos[l].display();
  }

 
  for (var p =0; p<particles.length; p++){
    particles[p].display();
  }

ground.display()
  d1.display()
  d2.display()
  d3.display()
  d4.display()
  d5.display()
  d0.display()

  drawSprites();
}
