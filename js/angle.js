// 座標轉換 

function setup() {
  createCanvas(640, 480);

}

function draw() {
  background(204);
  push();
  translate(width/2, height/2);
  var a = atan2(mouseY-height/2, mouseX-width/2);
  rotate(a);
  console.log(degrees(a));

  rectMode(CENTER);
  rect(0, 0, width/2, 20);

  pop();
}
