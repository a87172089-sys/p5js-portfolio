function setup() {
  createCanvas(600, 400);
  background(220);

  noStroke();

  // 만두머리
  fill(150, 90, 20);
  ellipse(180, 250, 110, 110);
  ellipse(420, 250, 110, 110);

  // 얼굴
  fill(255, 220, 185);
  ellipse(300, 220, 220, 250);

  // 머리카락
  fill(150, 90, 20);
  ellipse(300, 180, 250, 250);

  // 앞머리1
  fill(255, 220, 185);
  rect(215, 180, 170, 125);

  // 앞머리2
  triangle(260, 140, 245, 180, 275, 180);
  triangle(340, 140, 325, 180, 355, 180);
  
    // 리본
fill(255, 240, 170);

// 왼쪽 리본 날개
ellipse(380, 130, 40, 30);

// 오른쪽 리본 날개
ellipse(430, 130, 40, 30);

// 가운데 매듭
fill(255, 230, 120);
ellipse(405, 130, 25, 25);
  
  //눈썹
stroke(150, 90, 20);
strokeWeight(4);
noFill();
  line(230, 185, 270, 175);
  line(330, 175, 370, 183);
  noStroke();

  // 눈
  fill(0);
  ellipse(250, 220, 45, 45);
  ellipse(350, 220, 45, 45);

  // 눈 반짝이
  fill(255);
  ellipse(240, 210, 12, 12);
  ellipse(340, 210, 12, 12);

  // 볼
  fill(255, 160, 160);
  ellipse(210, 260, 70, 45);
  ellipse(390, 260, 70, 45);

  // 입
  noFill();
  stroke(255, 120, 120);
  strokeWeight(3);
  arc(300, 270, 100, 60, 0, PI);
}