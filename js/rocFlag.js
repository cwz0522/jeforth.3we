// 
// 畫中華民國國旗
// 顏色定義
var blueColor = '#000095';
var whiteColor = '#FFFFFF';
var redColor = '#FE0000';

function setup() {
  createCanvas(300, 200); // 3:2
  //console.log('1 width= %d, height = %d', width, height);
  noStroke();
  background(whiteColor);
  // 畫矩形
  //nofill();
  fill(redColor);
  rect(0, 0, width, height);
  // 畫藍色矩形
  fill(blueColor);
  rect(0, 0, width / 2, height / 2);
  var cX = width / 4; // 圓心X
  var cY = height / 4; // 圓心Y
  var r1 = width / 8; // 內圈圓半徑
  var r2 = r1 * 17 / 15; 
  var r3 = width / 4; // 外接圓半徑
  // 畫青天白日
  stroke(redColor);
  fill(blueColor);
  ellipse(cX, cY, r3, r3); // 外接圓
  fill(blueColor);
  ellipse(cX, cY, r2, r2); // 青圈
  fill(whiteColor);
  ellipse(cX, cY, r1, r1); // 白圈
  // 光芒
  fill(whiteColor); 
  //fill('#ff0000');
  var starX, starY;
  starX = cX + r3;
  starY = cY;
  console.log('startX=', starX);
  console.log('startY=', starY);
  push();
  translate(starX, starY);
  rotate(0);
  var angle = TWO_PI / 12;
  beginShape();
  var n = 0;
  for (var i = 0; i < 12; i++) {
    vertex(cos(angle * n) * r3, sin(angle * n) * r3);
    n++;
  }
  endShape(CLOSE);
  pop();
}

function draw() {



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
