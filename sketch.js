const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var heximg;
function preload(){
    heximg=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(450,350,900,50)
    platform=new Ground(700,290,400,75);
    cup1=new Cup(750,320-90,55,65);
    cup2=new Cup(775,320-90,55,65);
    cup3=new Cup(800,320-90,55,65);
    cup4=new Cup(762.5,312.5-130,55,65);
    cup5=new Cup(787.5,312.5-130,55,65);
    cup6=new Cup(775,280-140,55,65);
    stone1=new Stone(100,150,50,50);
    sling1=new SlingShot(stone1.body,{x:150,y:160})
}
function draw(){
    console.log(cup1);
    Engine.update(engine);
    background(0);
    ground1.display()
    platform.display();
    cup1.display();
    cup2.display();
    cup3.display();
    cup4.display();
    cup5.display();
    cup6.display();
    stone1.display();
    sling1.display();
    if(cup1.y>400&&cup2.y>400&&cup3.y>400&&cup4.y>400&&cup5.y>400&&cup6.y>400){
        textSize(20);
        text("You did it!",100,100);
    }
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
function keyPressed(){
    if(keyCode===32){
        sling1.attach(stone1.body)
    }
}