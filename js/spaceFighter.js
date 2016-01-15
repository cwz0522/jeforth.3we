/* SpaceFighter */
/* 第一週作業 */ 
var bg1, bg2; // 背景圖片 
var hp; // HP 圖片
var treasure; // 寶物圖片
var fighter; // 戰機圖片
var enemy; // 敵機圖片
var hpX; // 寶物血量(以 x 座標控制)
var bg1X, bg2X; // 背景圖位置
var tX, tY; // 寶物出現位置
var eX, eY; // 敵人出現座標

function setup() {
  createCanvas(640, 480); // 建立畫布 width = 640, height = 480
  // 載入相關素材
  bg1 = loadImage('img/bg1.png');
  bg2 = loadImage('img/bg2.png');
  enemy = loadImage('img/enemy.png');
  fighter = loadImage('img/fighter.png');
  hp = loadImage('img/hp.png');
  treasure = loadImage('img/treasure.png');

  // 設定背景圖片初始值
  // bg1 為左邊圖片， bg2 為右邊圖片
  bg1X = width;
  bg2X = 0;
  // 處理 HP 初始值
  hpX = floor(random(20, 210));
  // 處理寶物出現位置
  tX = floor(random(0, width - 200));
  tY = floor(random(60, height - 60));
  // 處理敵機出現位置
  eX = 0;
  eY = floor(random(50, height - 60));
}

function draw() {
  // 無限捲動背景(0, 1, 2, ..., 1279)
  image(bg1, bg1X-640, 0); 
  image(bg2, bg2X-640, 0);
  bg1X++;
  bg2X++;
  bg1X %= 1280;
  bg2X %= 1280;

  // 血條
  fill('#ff0000');
  noStroke();
  rect(14, 13, hpX, 20);
  image(hp, 10, 10);

  // 戰機
  image(fighter, 600, height / 2);

  // 寶物
  image(treasure, tX, tY);
  
  // 敵人
  image(enemy, eX, eY);
  eX += 3;
  eX %= width; 

}