var gradeBook = new Array(5);
gradeBook[0] = 60;
gradeBook[1] = 85;
gradeBook[2] = 95;
gradeBook[3] = 82;
gradeBook[4] = 68;

var sum=0, avg, maxGrade =0;

function setup() {
  createCanvas(300, 400);
  background(255);// 背景黑色
  for(var i=0; i < gradeBook.length; i++){
    var x = gradeBook[i];
    var y = map(i, 0, gradeBook.length, 0, height);
    rect(0, y, x, height/gradeBook.length);
    console.log("學生 " + (i+1) + ":" + x);
    sum += x;
    if(x > maxGrade) maxGrade = x;
  }
  avg = sum/gradeBook.length;
  console.log("sum = " + sum);
  console.log("avg = " + avg);
  console.log("max = " + maxGrade);
  stroke(255,0,0);
  line(avg, 0, avg, height);
};

function draw() {
 
};
