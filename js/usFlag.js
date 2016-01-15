// 
// 畫美國國旗
// 顏色定義
var blueColor = '#3C3B6E';
var whiteColor = '#FFFFFF';
var redColor = '#B22234';
var height = 988;
var width = 520;

function setup() {

  createCanvas(988, 520); // 19:10
  noStroke();
}

function draw() {
  background(whiteColor);
  var nbrStripes = 13;
  var A = height;
  var B = width; // height * 1.9
  var C = A * 7 / 13;
  var D = B * 2 / 5;
  var E = C / 10;
  var F = E;
  var G = D / 12;
  var H = G;
  var K = A * 0.0616;
  var L = A / nbrStripes;
  // console.log('A = ' + A);


  // 畫線條
  fill(redColor);
  for (var i = 0; i < nbrStripes; i += 2) {
    rect(0, L * i, width, L);
  }

  // 畫藍色矩形
  fill(blueColor);
  rect(0, 0, D, C);


  // 畫外部星星
  fill(whiteColor);
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 5; j++) {
      var x, y;
      x = G + (2 * H * i);
      y = E + (2 * E * j);
      drawStar(5, x, y, K, 2); // 畫星星
    }
  }

  // 畫內部星星
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      var x, y;
      x = G + H + (2 * H * i);
      y = E + F + (2 * E * j);
      drawStar(5, x, y, K, 2);
    }
  }
}


function drawStar(nbrPoints, cx, cy, odiam, skipPoints) {
  var orad = odiam / 2;

  push();
  translate(cx, cy);
  rotate(-PI / 2);

  var a = TWO_PI / nbrPoints;

  beginShape();
  var n = 0;
  for (var i = 0; i < nbrPoints; i++) {
    vertex(cos(a * n) * orad, sin(a * n) * orad);
    n += skipPoints;
  }
  endShape(CLOSE);
  pop();
}
