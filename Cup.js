class Cup extends BaseClass {
  constructor(x, y,width,height){
    var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        super(x,y,width,height);;
        this.image=loadImage("blue-cup-hi.png");
        this.visibility=255;
      }
  display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,55,65);
      pop();
    }
    
  }
};
