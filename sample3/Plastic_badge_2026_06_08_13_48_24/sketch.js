function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  noStroke();
}

function draw() {
  let t = frameCount;

  // 배경 색 변화
  let bg = 220 + sin(t * 0.01) * 5;
  background(bg);

  let shake = sin(t * 0.05) * 3;

  // 만두머리
  fill(150, 90, 20);
  ellipse(180 + shake, 250, 110, 110);
  ellipse(420 - shake, 250, 110, 110);

  // 얼굴 
  let faceScale = 220 + sin(t * 0.03) * 5;
  fill(255, 220, 185);
  ellipse(300, 220, faceScale, 250);

  // 머리카락
  fill(150, 90, 20);
  ellipse(300, 180 + shake, 250, 250);

  // 앞머리
  fill(255, 220, 185);
  rect(215, 180, 170, 125);

  triangle(260 + shake, 140, 245, 180, 275, 180);
  triangle(340 - shake, 140, 325, 180, 355, 180);

  // 리본 색 
  let ribbonR = 255;
  let ribbonG = 240 + sin(t * 0.05) * 15;
  let ribbonB = 170 + sin(t * 0.03) * 10;

  fill(ribbonR, ribbonG, ribbonB);

  ellipse(380, 130 + shake, 40, 30);
  ellipse(430, 130 + shake, 40, 30);

  fill(255, 230, 120);
  ellipse(405, 130 + shake, 25, 25);

  // 눈썹
  stroke(150, 90, 20);
  strokeWeight(4);
  noFill();
  line(230, 185 + shake, 270, 175 + shake);
  line(330, 175 + shake, 370, 183 + shake);
  noStroke();

  // 눈
  let eye = 45 + sin(t * 0.1) * 2;

  fill(0);
  ellipse(250, 220 + shake, eye, eye);
  ellipse(350, 220 + shake, eye, eye);

  // 눈 반짝이
  fill(255);
  ellipse(240, 210 + shake, 12, 12);
  ellipse(340, 210 + shake, 12, 12);

  // 블러셔 색
  let blush = 160 + sin(t * 0.07) * 10;
  fill(255, blush, blush);

  ellipse(210 + shake, 260, 70, 45);
  ellipse(390 - shake, 260, 70, 45);

  // 입
  noFill();
  stroke(255, 120, 120);
  strokeWeight(3);
  arc(300, 270 + shake, 100, 60, 0, PI);

  noStroke();
}

function keyPressed() {
  if (key === 's') {
    saveGif('assignment', 5);
  }
}