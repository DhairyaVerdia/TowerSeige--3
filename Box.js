class Block{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution :0.4,
            friction :0.0,
           
            //isStatic:true
           
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility =255;
        World.add(world, this.body);
      }
      score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
      display(){
       
        var angle = this.body.angle;
        var pos= this.body.position;
        
       
        if(this.body.speed > 3){
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
         // tint(255,this.Visiblity);
         // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
    }else{
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
        
         
           
         
      }
     
}


