/* 笑臉與生髮水 */
var centerX, centerY;

function setup() {
  createCanvas(640, 480);
  centerX = width / 2;
  centerY = height / 2;
  // 鼻子
  ellipse(centerX, centerY, 50, 50);
  // 嘴
  noFill();
  arc(centerX, centerY, height, height, 0, PI);
  // 眼睛
  fill('#ffffff');
  ellipse(centerX - 100, centerY - 50, 10, 10);
  ellipse(centerX + 100, centerY - 50, 10, 10);
}

function draw() {
	line(centerX, 0, mouseX, mouseY);
}
