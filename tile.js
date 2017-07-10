function Tile(){
  this.x =700;
  this.y = 700 ;
  this.c1 = color(255,255,255);
  
  this.render = function(){
  //noStroke();  
  fill(this.c1);
  rect(this.x,this.y,100,100);
 //console.log("render " + this.x +" " +this.y);
  
  
  };
  
  
  this.selectColor = function(i){
    
    var setWhite = color(255,255,255);
    var setRed = color(255,0,0 );
    var setGreen = color(0,255,0);
    var setBlue = color(0,0,255 );
    var setYellow = color(255,255,0 );
    var setCyan = color(0,255,255);
    var setMagenta = color(255,0,255);
    var selector = floor(random(7));
    
   
    
    switch(selector){
      case 0:
       this.c1 = setRed;
        break;
      case 1:
         this.c1 = setGreen;
        break;
      case 2:
         this.c1 = setBlue;
        break;
      case 3:
         this.c1 = setWhite;
        break;
      case 4:
         this.c1 = setYellow;
        break;
      case 5:
         this.c1 = setCyan;
        break;
      case 6:
         this.c1 = setMagenta;
        break;
    }
  };
  
  this.changeColor = function(c1){
    
    this.c1 = c1;
   
    
  };
  
  
  
  
}