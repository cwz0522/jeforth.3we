// 座標轉換 

function setup() {
  createCanvas(640, 480);

}

function draw() {
  background(255);
  fill(204, 102, 0);
  noStroke();

  var nbrCircles = 8;
  var spacing = width / nbrCircles;
  var minSize = spacing*1 / 5;
  var maxSize = spacing*4 / 5;

  for(var i=0; i < nbrCircles; i++){
    for(var j=0; j <nbrCircles; j++){
      var x = spacing / 2 + i * spacing;
      var y = spacing / 2 + j * spacing;
      var distance = dist(mouseX, mouseY, x, y);
      // version1 
      // var circleSize = map(distance, 0, width, minSize, maxSize);
      // version2 
      var circleSize = constrain(1/distance*10000, minSize, maxSize);
      ellipse(x, y, circleSize, circleSize);
    }
  } 
}
