// 
// 將畫面用磚塊填滿

var brickWidth=80;
var brickHeight=40 ;
var spacing=2; // 磚塊間水泥寬
var x, y, iX, iY;

function setup() {
  createCanvas(400, 360);
  fill(128,64,0);
  stroke(255,0,0);
  /*
  for(var y=0; y < height; y+=brickHeight){
    for(var x=0; x <= width; x+=brickWidth){ // <= 很重要，才不會少一塊磚
      if(y%(brickHeight*2) == 0){
        rect(x, y, brickWidth, brickHeight);
      }else{
        rect(x-brickWidth/2, y, brickWidth, brickHeight);
      }
    }
  }
  */
  iX = 10;
  iY = 10;
  for(var col=0; col < 4; col++){
    for(var row=0; row < 4; row++){
      x = iX + (brickWidth+spacing)*col;
      y = iY + (brickHeight+spacing)*row;
      if(row%2 == 0){
        rect(x, y, brickWidth, brickHeight);
      }else{
        rect(x-brickWidth/2, y, brickWidth, brickHeight);
      }
    }
  }
}

function draw() {
 
}

