// https://gist.github.com/jonesfish/c96b8daef060808ee1d4
var ballX, ballY; // 球的座標
var ballSize; // 球的大小
var centerX, centerY; // 中心點 座標
var paddleW, paddleH; // 球拍的長寬
var rightPaddleX, rightPaddleY; // 右邊球拍座標 
var leftPaddleX, leftPaddleY; // 左邊球拍座標 
var speedX, speedY; // 球移動的速度
var isPlaying = true; // 是否在玩 pong

function setup() {
  createCanvas(640, 480);
  centerX = width / 2;
  centerY = height / 2;
  ballX = centerX; // 初始座標 X
  ballY = centerY; // 初始座標 Y
  ballSize = 15;

  speedX = floor(random(1, 5));
  speedY = floor(random(-5, 5));
  paddleW = 10;
  paddleH = 50;

  rightPaddleX = width - paddleW * 2;
  rightPaddleY = centerY - paddleH / 2;
  leftPaddleX = paddleW;
  leftPaddleY = centerY - paddleH / 2;

  drawBoard(); // 畫遊戲盤
  drawBall(centerX, centerY); // 畫球
  drawPaddle(); // 畫球拍
}


function draw() {
  // 畫框
  stroke('#0000ff');
  noFill();
  rect(0, 0, width - 1, height - 1);
  if (isPlaying) {
    drawBoard();
    ballBoundry();
    drawBall(ballX, ballY);
    drawPaddle();
  }



}

function mousePressed() {

}

function ballBoundry() {
  ballX += speedX;
  // ballX %= width; // 限定 x 座標
  ballY += speedY;
  // ballY %= height; // 限定 y 座標

  // 邊界偵測
  if (ballX < 0 || ballX > width) {
    speedX *= -1;
  }
  if (ballY < 0 || ballY > height) {
    speedY *= -1;
  }
}

function keyPressed() {
  isPlaying = !isPlaying; // 反轉 isPlaying 狀態
}

function drawBoard() {
  background(255); // 背景黑色
  // 畫中線
  stroke(128);
  line(centerX, 0, centerX, height);
  // 畫框
  stroke('#0000ff');
  noFill();
  rect(0, 0, width - 1, height - 1);
}

function drawBall(x, y) {
  // 畫球
  noStroke();
  fill('#ff0000');
  ellipse(x, y, ballSize, ballSize);
}

function drawPaddle() {
  // 畫球拍
  fill('#0000ff');
  rect(rightPaddleX, rightPaddleY, paddleW, paddleH);
  rect(leftPaddleX, leftPaddleY, paddleW, paddleH);
}
