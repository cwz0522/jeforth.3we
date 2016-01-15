// 旋轉的圓
var angle = 0;
var phi = 0;
var spacing = 25;
var mySize = spacing * 5 / 3;

function setup() {
  createCanvas(400, 400);
    ellipse(10, 10, 20, 20);
}

function draw() {
  background(255);

  var ix = 0;
  var iy = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var x = ix + i * spacing;
      var y = iy + j * spacing;
      console.log(mySize);
      //angle += 0.66;
      noFill();
      ellipse(x, y, mySize, mySize);
      // 衛星
      fill(0);
      var sx = x + cos(angle + phi) * mySize / 2;
      var sy = y + sin(angle + phi) * mySize / 2;
      ellipse(sx, sy, 5, 5);
    }
  }
  angle = 0;
  phi += 0.105;
}
