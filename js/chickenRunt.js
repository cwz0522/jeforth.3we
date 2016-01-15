var x, y, size;
var startY, endY;
var laneGap;

var nbrCar = 5;
var life = 3;

var GAME_START = 1;
var GAME_WIN = 2;
var GAME_LOSE = 3;
var GAME_RUN = 4;
var DIE = 5;
var gameState;


// var [] carSpeed;
// var [] carX;

var myFont;

function preload() {
  myFont = loadFont('js/Square_One.ttf');
}

function setup() {
  createCanvas(400, 400);
  carX = new Array(nbrCar);
  carSpeed = new Array(nbrCar);
  size = 40;
  laneGap = size + 10;
  x = width / 2;
  y = 0;
  startY = 0;
  endY = laneGap * (nbrCar + 1);

  imgCars = new Image(nbrCar);
  for (var i = 0; i < nbrCar; i++) {
    imgCars[i] = loadImage("img/car" + i + ".png");
    carX[i] = width;
    carSpeed[i] = random(1, 5);
  }
  imgChicken = loadImage("img/chicken.png");
  imgGhost = loadImage("img/ghost.png");
  imgEgg = loadImage("img/egg.png");
  imgWin = loadImage("img/win.png");
  imgLose = loadImage("img/lose.png");

  // start game
  gameState = GAME_START;
};

function draw() {
  switch (gameState) {
    case GAME_START:
      background(10, 110, 16);
      textSize(20);
      textFont(myFont);
      text("Press Enter", width / 2, height / 2);
      break;
    case GAME_RUN:
      background(10, 110, 16);

      // start and end area
      fill(4, 13, 78);
      rect(0, startY, width, laneGap);
      rect(0, endY, width, laneGap);

      // show life
      for (var i = 0; i < life; i++) {
        image(imgEgg, i * size, height - laneGap);
      }
      // show chicken
      image(imgChicken, x, y);

      // check destination 
      if (y >= endY) {
        // increase car speed
        for (var i = 0; i < nbrCar; i++) {
          carSpeed[i]++;
        }
        gameState = GAME_WIN;
      }

      // cars
      for (var i = 0; i < nbrCar; i++) {
        var carY = (i + 1) * laneGap;
        carX[i] -= carSpeed[i];
        // boundary detection
        if (carX[i] < 0) {
          carX[i] = width;
        }
        // show cars
        image(imgCars[i], carX[i], carY);
        // hit Test
        if (x + size > carX[i] && x < carX[i] + size &&
          y + size > carY && y < carY + size) {
          // decrease life
          life--;
          gameState = DIE;
        }
      }
      break;
    case DIE:
      // check life
      if (life <= 0) {
        // reset car speed
        for (var i = 0; i < nbrCar; i++) {
          carSpeed[i] = random(1, 5);
        }
        gameState = GAME_LOSE;
      }
      image(imgGhost, x, y);
      break;
    case GAME_WIN:
      background(0);
      image(imgWin, width / 4, height / 4);
      fill(255);
      text("You Win !!", width / 2, height / 4);
      break;
    case GAME_LOSE:
      background(0);
      image(imgLose, width / 4, height / 4);
      fill(255);
      text("You Lose", width / 2, height / 4);
      break;
  }
};

function keyPressed() {
  console.log(keyCode);   // 印出按鍵的編碼
  if (key == keyCode && gameState == GAME_RUN) {
    switch (key) {
      case UP:
        y -= laneGap;
        break;
      case DOWN:
        y += laneGap;
        break;
      case LEFT:
        x -= laneGap;
        break;
      case RIGHT:
        x += laneGap;
        break;
    }
  }

  // boundary
  x = (x < 0) ? 0 : x;
  x = (x > width - laneGap) ? width - laneGap : x;
  y = (y < 0) ? 0 : y;
  y = (y > height) ? height : y;

  if (key == ENTER && gameState != GAME_RUN) {
    if (gameState == GAME_LOSE) {
      // restart the game
      life = 3;
    }

    x = width / 2;
    y = startY;
    gameState = GAME_RUN;
  }
};
