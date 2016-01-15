// https://gist.github.com/jonesfish/cad6db5787d163719478
// 賽車
var GAME_START = 0;
var GAME_RUN = 1;
var GAME_WIN = 2;
var GAME_OVER = 3;
var gameState;

var car1X, car2X;
var carWidth;
var maxSpeed;

var car1, car2, start, win, lose;

function setup() {
  createCanvas(400, 300);
  // loadImage
  car1 = loadImage("img/car1.png");
  car2 = loadImage("img/car2.png");
  //start = loadImage("img/start.png");
  //win = loadImage("img/win.png");
  // lose = loadImage("img/lose.png");
  carWidth = 80;
  maxSpeed = 3;
  gameState = GAME_START;
}

function draw() {
  background('#ffffff');
  
  switch (gameState) {
    case GAME_START:
      // 設定變數初始值
      car1X = car2X = 0;
      // 偵測滑鼠動作
      if (mouseY > 10 && mouseY < 60) {
        if (mouseIsPressed) { // 點選
          gameState = GAME_RUN;
        } else { // 滑鼠滑過
          noStroke();
          fill(255, 255, 0, 100);
          rect(0, 10, width, 60);
        }
      }
      // show message
      textSize(32);
      fill("#ff0000");
      textAlign(CENTER);
      text("start",width / 2, height / 6);
      // show car
      image(car1, car1X, height/3);
      image(car2, car2X, height*2/3);
      break;
    case GAME_RUN:
      // 移動車子
      car1X += random(0, maxSpeed);
      car2X += random(0, maxSpeed);
      // 顯示車子圖片
      image(car1, car1X, height / 3);
      image(car2, car2X, height * 2 / 3);
      // 畫終點線
      stroke('#ff0000');
      line(width - carWidth, 0, width - carWidth, height);
      // 輸或贏
      if (car1X >= width - carWidth) {
        gameState = GAME_WIN;
      } else if (car2X >= width - carWidth) {
        gameState = GAME_OVER;
      }
      break;
    case GAME_WIN:
      // mouse action
      if (mouseY > 100 && mouseY < 160) {
        if (mouseIsPressed) {
          // click
          gameState = GAME_START;
        } else {
          // hover
          noStroke();
          fill(255, 255, 0, 100);
          rect(0, 100, width, 60);
        }
      }
      // 顯示訊息
      textSize(32);
      fill("#ff0000");
      textAlign(CENTER);
      text("You Win!",width / 2, height / 3 + 40);
      break;
    case GAME_OVER:
      // mouse action
      if (mouseY > 100 && mouseY < 160) {
        if (mouseIsPressed) { // click
          gameState = GAME_START;
        } else {
          // hover
          noStroke();
          fill(255, 255, 0, 100);
          rect(0, 100, width, 60);
        }
      }
      textSize(32);
      fill("#ff0000");
      textAlign(CENTER);
      text("You Lose!",width / 2, height / 3 + 40);
      break;
  }
  
}
