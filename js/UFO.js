// https://gist.github.com/jonesfish/d5968fd03c976e82d88c
// 沿著畫布邊緣飛行的 UFO
var x, y;
var w, h;
var speed = 5;
var GO_RIGHT = 0;
var GO_DOWN = 1;
var GO_LEFT = 2;
var GO_UP = 3;
var state = GO_RIGHT;

function setup() {
  createCanvas(500, 500);
  w = 50;
  h = 30;
  x = w / 2;
  y = h / 2;
}

function draw() {
  switch (state) {
    case GO_RIGHT:
      x += speed;
      if (x > width - w / 2) {
        x = width - w / 2;
        state = GO_DOWN;
      }
      break;
    case GO_DOWN:
      y += speed;
      if (y > height - h / 2) {
        y = height - h / 2;
        state = GO_LEFT;
      }
      break;
    case GO_LEFT:
      x -= speed;
      if (x < w / 2) {
        x = w / 2;
        state = GO_UP;
      }
      break;
    case GO_UP:
      y -= speed;
      if (y < h / 2) {
        y = h / 2;
        state = GO_RIGHT;
      }
      break;
  }
  drawUFO(x, y, w, h);
}

function drawUFO(x, y, w, h) {
  background('#000000'); // 背景黑色
  // 畫飛碟
  fill(151, 37, 210);
  ellipse(x, y, w, h / 2);
  fill(186, 0, 255);
  stroke('#ffffff');
  arc(x, y, h * 4 / 5, h * 4 / 5, PI, TWO_PI);
}



function keyPressed() {
  // println(keyCode);   // 印出按鍵的編碼
  switch (keyCode) {
    case UP_ARROW:
      upPressed = true;
      break;
    case DOWN_ARROW:
      downPressed = true;
      break;
    case LEFT_ARROW:
      leftPressed = true;
      break;
    case RIGHT_ARROW:
      rightPressed = true;
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case UP_ARROW:
      upPressed = false;
      break;
    case DOWN_ARROW:
      downPressed = false;
      break;
    case LEFT_ARROW:
      leftPressed = false;
      break;
    case RIGHT_ARROW:
      rightPressed = false;
      break;
  }
}
