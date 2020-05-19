const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(600,400);
    
    engine = Engine.create();
    world = engine.world;

    

   ball= new Box(200,100,20,20,20)

    log6 = new BaseClass(300,10,100,20);
    
    
    chain = new Chain(log6.body,ball.body);
}

function draw(){
    background('orange')
    Engine.update(engine);
    strokeWeight(4);

    ball.display();
    log6.display();
    chain.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    Matter.Body.setStatic(ball.body,false)
}