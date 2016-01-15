// https://gist.github.com/jonesfish/ae17765493847ecc9368
// 沿著畫布邊緣飛行的 UFO
// p5.js 
// UP --> UP_ARROW
// RIGHT --> RIGHT_ARROW
// DOWN --> DOWN_ARROW
// LEFT --> LEFT_ARROW
var x, y;
var speed = 5;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;


function setup() {
  createCanvas(500, 500);
  x = width / 2;
  y = height / 2;
}

function draw() {
  // 鍵盤控制  
  if(upPressed) y -= speed;
  if(downPressed) y += speed;
  if(leftPressed) x -= speed;
  if(rightPressed) x += speed;  

  // 邊界偵測
  if(x > width) x = 0;
  if(x < 0) x = width;
  if(y > height) y = 0;
  if(y < 0) y = height;

  background('#000000'); // 背景黑色
  // 畫飛碟
  fill(151, 37, 210);
  ellipse(x, y, 50, 15);
  fill(186, 0, 255);
  stroke('#ffffff');
  arc(x, y, 25, 25, PI, TWO_PI);
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
