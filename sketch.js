var tile = [];

//size of the blocks
var sizeSquare = 30;
var blockX = sizeSquare;
var blockY = sizeSquare;

var total;



function setup() {
  frameRate(30);
  var SizeW = 600;
  var SizeH = 600;
  createCanvas(SizeW,SizeH);
  
  //number of blocks per side
var NumBlocksX = (floor(SizeW/blockX));
//console.log("NumBlocksX " +NumBlocksX);
var NumBlocksY = (floor(SizeH/blockY)) ;
//console.log("NumBlocksY " +NumBlocksY);
 total = (NumBlocksX  * NumBlocksY) -1;


  //this loop is for creating the tiles
  for(var i = 0; i<=total; i++){
    tile.push(new Tile());
    tile[i].selectColor(i);
   
    }
    setTilePositions(tile,NumBlocksX,NumBlocksY);
    //sTiles[] = findSurroundingTiles(tile[1].x,tile[1].y);
    
   
   
  
}

function draw() {
  
   var SizeW = 600;
  var SizeH = 600;
  var NumBlocksX = (floor(SizeW/blockX));
//console.log("NumBlocksX " +NumBlocksX);
var NumBlocksY = (floor(SizeH/blockY)) ;
//console.log("NumBlocksY " +NumBlocksY);
 total = (NumBlocksX  * NumBlocksY) -1;
  for(var i = 0; i<tile.length; i++){
  tile[i].render();
 //tile[i].selectColor();
  findSurroundingTiles(tile,i,tile[i].x,tile[i].y,NumBlocksX,NumBlocksY);
  
  }
  
  //tile[0].changeColor();
}



function setTilePositions(tile,NumBlocksX,NumBlocksY){
 
  

  
  var counterX = 0;
  var counterY = 0;
  var counter = 0;
  //outer loop that adds to the y
    for(var j = 0; j <NumBlocksY; j++){
      //inner loop that adds to the x
      for(var i = 0; i <NumBlocksX; i++){
        //console.log("set loop "+ counter + " " + counterX + " " + counterY);
        //add 10 each time to x
       
        tile[counter].x = counterX;
        tile[counter].y = counterY;
        
        counterX += blockX;
        counter++;
        
       
      }
      
      //add 10 each time to y
      
        counterX = 0;
      counterY += blockY;
     
      
      
      
    }
   // console.log(counterX + " " +counterY+ " " + counter);
}

function findSurroundingTiles(tile,initalPos,ox,oy,NumBlocksX,NumBlocksY){
var x = ox/blockX;
 var y = oy/blockY;
 

 
  var tempTiles = [];
  var confirmedTiles = [];
  for(var i = 0; i<8;i++ ){
    tempTiles.push(new tempTile);
    
  }
  
  tempTiles[0].x = x+1;
  tempTiles[0].y = y;
  
  tempTiles[1].x = x-1;
  tempTiles[1].y = y;
  
  tempTiles[2].x = x;
  tempTiles[2].y = y+1;
  
  tempTiles[3].x = x;
  tempTiles[3].y = y-1;
  
  tempTiles[4].x = x+1;
  tempTiles[4].y = y+1;
  
  tempTiles[5].x = x+1;
  tempTiles[5].y = y-1;
  
  tempTiles[6].x = x-1;
  tempTiles[6].y = y+1;
  
  tempTiles[7].x = x-1;
  tempTiles[7].y = y-1;
  
  
  

  //this for loop changes the value fo the temptiles so that they can be compared to the actual tile positions
  for(var i = 0; i<tempTiles.length;i++){
    
    tempTiles[i].x = (tempTiles[i].x * blockX);
    tempTiles[i].y = (tempTiles[i].y * blockY) ;
   
  }
  
  
  for(var i =0; i<tile.length;i++){
 
    for(var j = 0; j<tempTiles.length;j++){
      if(tile[i].x === tempTiles[j].x){
        
        if(tile[i].y === tempTiles[j].y){
          //tile[i].changeColor();
          confirmedTiles.push(tile[i]);
      }
      }
    }
  }
  for(var i = 0; i<confirmedTiles.length;i++){
    //console.log(i + " "+ confirmedTiles[i].x + " " + confirmedTiles[i].y);
  }
  var selector = floor(random(0,confirmedTiles.length));
  //console.log(selector);
  var c1 = tile[initalPos].c1;
  
  confirmedTiles[selector].changeColor(c1);
  
}

function tempTile(){
  this.x = 0;
  this.y = 0;
  this.confirmed = false;
}






  
  
  
    
    
  
      
  
  
 

