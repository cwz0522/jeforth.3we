/* 繪圖程式 */
function setup() {
  createCanvas(640, 480);
  background('#ffffff');
}

function draw() {
	//console.log(mousePressed());
	// P5.js mousePressed --> mouseIsPressed
	if(mouseIsPressed){
		if(mouseButton == LEFT){
			stroke('#ff0000');
		}else{
			stroke('#000000');
		}
		line(pmouseX, pmouseY, mouseX, mouseY);
	}

}
