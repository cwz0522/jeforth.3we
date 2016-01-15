/* SpaceFighter */
/* 第三週作業 */
// ============================================================================
var bg1, bg2; // 背景圖片 
var hp; // HP 圖片
var treasure; // 寶物圖片
var fighter; // 戰機圖片
var enemy; // 敵機圖片
var start1, start2; // 遊戲開始畫面
var end1, end2; // 遊戲結束畫面
// 遊戲狀態設定
var GAME_START = 1;
var GAME_RUN = 2;
var GAME_LOSE = 3;
var gameState;
// 按鍵狀態設定
var upPressed = downPressed = leftPressed = rightPressed = false;
var hpX; // 寶物血量(以 x 座標控制)
var bg1X, bg2X; // 背景圖位置
var tX, tY; // 寶物出現位置
var eX, eY; // 敵人出現座標
var fX, fY; // 戰機出現座標
// 設定戰機速度
var fighterSpeed = 5;
// ============================================================================
function setup() { // 基礎設定
  createCanvas(640, 480); // 建立畫布 width = 640, height = 480
  // 載入相關素材
  start1 = loadImage('img/start1.png');
  start2 = loadImage('img/start2.png');
  end1 = loadImage('img/end1.png');
  end2 = loadImage('img/end2.png');
  bg1 = loadImage('img/bg1.png');
  bg2 = loadImage('img/bg2.png');
  enemy = loadImage('img/enemy.png');
  fighter = loadImage('img/fighter.png');
  hp = loadImage('img/hp.png');
  treasure = loadImage('img/treasure.png');
  // 設定背景圖片初始值
  bg1X = width;
  bg2X = 0;
  // 處理 HP 初始值
  hpX = 210; // 滿血
  // 處理寶物出現位置
  tX = floor(random(0, width - 200));
  tY = floor(random(60, height - 60));
  // 處理敵機出現位置
  eX = 0;
  eY = floor(random(50, height - 60));
  // 戰機初始座標 
  fX = 600;
  fY = height / 2;
  // 預設遊戲狀態
  gameState = GAME_START;
}
// ============================================================================
function draw() { // 主程式
  switch (gameState) {
    case GAME_START:
      image(start2, 0, 0); // 載入開始圖片
      mouseDect(); // 滑鼠偵測，確認使用者按下開始按鈕
      break;
    case GAME_RUN:
      bgProcess(); // 處理背景
      image(treasure, tX, tY); // 處理寶物
      hpProcess(); // 處理血條
      enemyGenerate(); // 產生敵人
      image(fighter, fX, fY); // 處理戰機
      // 方向控制
      fighterControl();
      // 邊界偵測
      fighterBoundaryDect();
      // 吃寶物測試
      getTreasure();
      // 撞到敵人判斷
      hitFighter();
      // 遊戲結束邏輯
      gameOver();
      break;
    case GAME_LOSE:
      image(end2, 0, 0); // 載入遊戲結束圖片
      // 處理遊戲結束畫面圖片
      gameOverImage();
  }
}

// 與戰機和敵機碰撞問題
function hitFighter() {
  // 使用正方形法解距離
  var dXSquare = (eX - fX) * (eX - fX);
  var dYSquare = (eY - fY) * (eY - fY);
  var distSquare = dXSquare + dYSquare;
  // 61^2*2 = 7442, 61^2 = 3721 61 為敵機的畫素
  if (distSquare <= 5202) {
    hpX -= (210 - 10) * 0.2; // 減 20 % 血
    eX = floor(random(0, width - 200));
    eY = floor(random(50, height - 60));
  }
}

// 判斷戰機吃到寶物
function getTreasure() {
  // 使用正方形法解距離
  var dXSquare = (tX - fX) * (tX - fX);
  var dYSquare = (tY - fY) * (tY - fY);
  var distSquare = dXSquare + dYSquare;
  // 51^2*2 = 5202, 51^2 = 2601 51 為戰機的畫素
  if (distSquare <= 5202) {
    hpX += (210 - 10) * 0.1; // 加 10 % 血
    tX = floor(random(0, width - 200));
    tY = floor(random(60, height - 60));
  }
}


function mouseDect() {
  if (mouseX >= width * 95 / 300 && mouseX <= width * 215 / 300 &&
    mouseY >= height * 390 / 500 && mouseY <= height * 435 / 500) {
    image(start1, 0, 0);
  } else {
    image(start2, 0, 0);
  }
  //click to start
  if (mouseIsPressed) {
    if (mouseX >= width * 95 / 300 && mouseX <= width * 215 / 300 &&
      mouseY >= height * 390 / 500 && mouseY <= height * 435 / 500) {
      gameState = GAME_RUN;
    }
  }
}

function gameOverImage() {
  // 處理是否重啟遊戲
  if (mouseIsPressed) {
    if (mouseX >= width * 96 / 300 && mouseX <= width * 205 / 300 &&
      mouseY >= height * 257 / 400 && mouseY <= height * 292 / 400) {
      gameState = GAME_RUN;
    }
  }
}


function fighterBoundaryDect() {
  if (fX > 589) fX = 589;
  if (fX < 0) fX = 0;
  if (fY > 429) fY = 429;
  if (fY < 0) fY = 0;
}

function fighterControl() {
  if (upPressed) {
    console.log("upPressed = " + upPressed);
    fY -= fighterSpeed;
  }
  if (downPressed) fY += fighterSpeed;
  if (leftPressed) fX -= fighterSpeed;
  if (rightPressed) fX += fighterSpeed;
}

function gameOver() {
  if (hpX <= 10) {
    gameState = GAME_LOSE;
    // 重設變數值
    bg1X = width;
    bg2X = 0;
    // 處理 HP 初始值
    hpX = 210; // 滿血
    // 處理寶物出現位置
    tX = floor(random(0, width - 200));
    tY = floor(random(60, height - 60));
    // 處理敵機出現位置
    eX = 0;
    eY = floor(random(50, height - 60));
    // 戰機初始座標 
    fX = 600;
    fY = height / 2;
  }
}

function bgProcess() {
  // 無限捲動背景(0, 1, 2, ..., 1279)
  image(bg1, bg1X - 640, 0);
  image(bg2, bg2X - 640, 0);
  bg1X++;
  bg2X++;
  bg1X %= 1280;
  bg2X %= 1280;
}

function enemyGenerate() {
  // 敵人
  /*
  image(enemy, eX, eY);
  eX += 3;
  eX %= width;
  // TODO
  if (eY > fY) {
    eY -= 2;
  } else if (eY < fY) {
    eY += 2;
  }
  */
  // 第一波敵人
  

}

// 血條
function hpProcess() {
  fill('#ff0000');
  noStroke();
  if (hpX >= 210) hpX = 210;
  rect(14, 13, hpX, 20);
  image(hp, 10, 10);
}

// 偵測按鍵是否釋放
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

// 偵測按鍵是否按下
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