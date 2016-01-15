var x, y, w, h;
x = 0;
y = 0;
w = 200;
h = 160;


function setup() {
  createCanvas(640, 480);
  background(0); // 背景黑色

  // 使用函數繪圖

  // drawHouse(x, y, w, h);
};

function draw() {
  background(0); // 背景黑色
  // 顏色 
  r = floor(random(256));
  g = floor(random(256));
  b = floor(random(256));
  //drawHouseBasic(x, y);	// 畫房子
  drawHouse(x, y, w, h);
  x += 2;	// 每個頁面更新時，x 往右移動
  x %= width;
};


var drawHouseBasic = function(x, y) {
  /* 基本相對座標繪製房子 */
  stroke('#fffffff'); // 白色線條
  // fill('#ff0000'); // 填入紅色屋頂
  fill(r, g, b);
  // 原點(x, y)
  // 屋頂頂點 (x + 30, y), (x, y + 40), (x + 60, y + 40)
  triangle(x + 30, y, x, y + 40, x + 60, y + 40);
  // 切換矩形繪製模式 --> CORNERS
  rectMode(CORNERS);
  // 牆(x, y+40), (x+60, y+80) 
  fill('#ffff00');
  rect(x, y + 40, x + 60, y + 80);
  // 門(x+30, y + 60), (x + 50, y + 80)
  stroke('#000000'); // 黑色線條
  fill('#ffffff'); // 填入白色
  rect(x + 30, y + 60, x + 50, y + 80);
  // 窗(x+20, y+60), r = 5
  ellipse(x + 15, y + 60, 10, 10);
};


var drawHouse = function(x, y, w, h) {
  /* 套用相對座標並加入長寬比例 */
  stroke('#fffffff'); // 白色線條
  fill('#ff0000'); // 填入紅色屋頂
  // 原點(x, y) 
  // 屋頂頂點 (x + 30, y), (x, y + 40), (x + 60, y + 40)
  triangle(x + w / 2, y, x, y + h / 2, x + w, y + h / 2);
  // 切換矩形繪製模式 --> CORNERS
  rectMode(CORNERS);
  // 牆(x, y+40), (x+60, y+80) 
  fill('#ffff00');
  rect(x, y + h / 2, x + w, y + h);
  // 門(x+30, y + 60), (x + 50, y + 80)
  stroke('#000000'); // 黑色線條
  fill('#ffffff'); // 填入白色
  rect(x + w / 2, y + 2 / 3 * h, x + 5 / 6 * w, y + h);
  // 窗(x + 15, y + 60, 10, 10)
  ellipse(x + w / 4, y + 2 / 3 * h, w / 10, w / 10);
}
