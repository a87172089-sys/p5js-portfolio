let wink = false;
let heart = false;

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(230);

  // ====== 옷 ======
noStroke();

// 몸통 
fill(255, 230, 150);
rect(130, 290, 140, 90, 25);

// 카라 
fill(255);
triangle(175, 290, 200, 330, 155, 330);
triangle(225, 290, 200, 330, 245, 330);

// 가운데 장식
fill(255, 220, 100);
ellipse(200, 320, 18, 18);
  
  // 양갈래
  noStroke();
  fill(139, 90, 43);

  // 왼쪽
  ellipse(130, 170, 50, 50);
  ellipse(105, 200, 45, 45);
  ellipse(85, 230, 40, 40);
  triangle(85, 230, 65, 260, 105, 260);

  // 오른쪽
  ellipse(270, 170, 50, 50);
  ellipse(295, 200, 45, 45);
  ellipse(315, 230, 40, 40);
  triangle(315, 230, 295, 260, 335, 260);

  // 얼굴
  fill(240, 220, 200);
  ellipse(200, 230, 160, 150);

  // 머리카락
  fill(139, 90, 43);
  ellipse(200, 150, 160, 100);

  // 앞머리
  rect(120, 150, 160, 50);

  // 앞머리 포인트
  fill(240, 220, 200);
  triangle(160, 200, 180, 200, 170, 185);
  triangle(220, 200, 240, 200, 230, 185);

  // 옆머리
  fill(139, 90, 43);
  rect(120, 170, 25, 70);
  rect(255, 170, 25, 70);

  // 리본 왼쪽
  fill(255, 230, 150);
  ellipse(130, 140, 35, 20);
  ellipse(110, 160, 35, 20);
  fill(255, 220, 100);
  ellipse(120, 150, 12, 12);

  // 리본 오른쪽
  fill(255, 230, 150);
  ellipse(270, 140, 35, 20);
  ellipse(290, 160, 35, 20);
  fill(255, 220, 100);
  ellipse(280, 150, 12, 12);

 // 눈
  fill(0);
  ellipse(165, 220, 24, 24);

  if (wink) {
    stroke(0);
    strokeWeight(2);
    line(225, 220, 245, 220);
  } else {
    noStroke();
    ellipse(235, 220, 24, 24);
  }

  fill(255);
  ellipse(160, 215, 6, 6);
  ellipse(168, 225, 4, 4);

  if (!wink) {
    ellipse(230, 215, 6, 6);
    ellipse(240, 225, 4, 4);
  }

  noFill();
  stroke(0);
  strokeWeight(2);
  arc(160, 220, 40, 25, PI, TWO_PI);

  if (!wink) {
    arc(240, 220, 40, 25, PI, TWO_PI);
  }

  stroke(120, 70, 40);
  strokeWeight(3);
  line(140, 190, 180, 185);
  line(220, 185, 260, 190);

  noStroke();
  fill(255, 120, 130);
  ellipse(140, 250, 50, 30);
  ellipse(260, 250, 50, 30);

  if (wink) {
    textSize(20);
    noStroke();
    fill(120, 70, 40);
    text("3", 195, 255);
  } else {
    noFill();
    stroke(120, 70, 40);
    strokeWeight(2);
    arc(189, 250, 25, 20, 0, PI);
    arc(215, 250, 25, 20, 0, PI);
  }

  if (!heart) {
    noFill();
    stroke(255, 220, 0);
    strokeWeight(2);

    beginShape();
    vertex(70, 60);
    vertex(75, 75);
    vertex(90, 75);
    vertex(78, 85);
    vertex(83, 100);
    vertex(70, 90);
    vertex(57, 100);
    vertex(62, 85);
    vertex(50, 75);
    vertex(65, 75);
    endShape(CLOSE);

    beginShape();
    vertex(370, 180);
    vertex(375, 195);
    vertex(390, 195);
    vertex(378, 205);
    vertex(383, 220);
    vertex(370, 210);
    vertex(357, 220);
    vertex(362, 205);
    vertex(350, 195);
    vertex(365, 195);
    endShape(CLOSE);

    beginShape();
    vertex(110, 300);
    vertex(115, 315);
    vertex(130, 315);
    vertex(118, 325);
    vertex(123, 340);
    vertex(110, 330);
    vertex(97, 340);
    vertex(102, 325);
    vertex(90, 315);
    vertex(105, 315);
    endShape(CLOSE);
  } else {
    noStroke();
    fill(255, 120, 150);

    ellipse(65, 70, 15, 15);
    ellipse(80, 70, 15, 15);
    triangle(58, 72, 87, 72, 72, 90);

    ellipse(365, 190, 15, 15);
    ellipse(380, 190, 15, 15);
    triangle(358, 192, 387, 192, 372, 210);

    ellipse(105, 310, 15, 15);
    ellipse(120, 310, 15, 15);
    triangle(98, 312, 127, 312, 112, 330);
  }
}

function mousePressed() {
  wink = !wink;
  heart = !heart;
  redraw();
}
