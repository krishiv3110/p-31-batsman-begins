 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

var ok;
var maxdrops=100;
var Drop;
var thunder1,thunderimg;
//var drops = [];


function preload(){

}

function setup(){

  var canvas = createCanvas(600,600);

  engine = Engine.create();
	world = engine.world;
      
  ok = new Drops(300,100)

  Engine.run(engine);
}

function draw(){

    background("black")

    Engine.update(engine)


    for(var i=0; i<maxdrops; i++){
    //   ok.push(new Drops(random(0,400),random(0,400)))
    //  drops.display()
     }


   ok.display(); 
//   maxdrops.display();
//   drops.display();

}   


