// 座標轉換 

function setup() {
  createCanvas(640, 480);
  background(0);

  for (var i = 10; i < width; i = i + 50) {
    push();
    translate(i, i);

    if(i==60){
      rotate(PI/2);
    }

    
    /*
    triangle(15, 0, 0, 15, 30, 15);
    rect(0, 15, 30, 30);
    rect(12, 30, 10, 15);
    */
    r = floor(random(256));
    g = floor(random(256));
    b = floor(random(256));
    stroke('#fffffff'); // 白色線條
    // fill('#ff0000'); // 填入紅色屋頂
    fill(r, g, b);
    // 原點(x, y)
    // 屋頂頂點 (x + 30, y), (x, y + 40), (x + 60, y + 40)
    triangle(30, 0, 0, 40, 60, 40);
    // 切換矩形繪製模式 --> CORNERS
    rectMode(CORNERS);
    // 牆(x, y+40), (x+60, y+80) 
    fill('#ffff00');
    rect(0, 40, 60, 80);
    // 門(x+30, y + 60), (x + 50, y + 80)
    stroke('#000000'); // 黑色線條
    fill('#ffffff'); // 填入白色
    rect(30, 60, 50, 80);
    // 窗(x+20, y+60), r = 5
    ellipse(15, 60, 10, 10);

    pop();
  }
}

function draw() {

}
