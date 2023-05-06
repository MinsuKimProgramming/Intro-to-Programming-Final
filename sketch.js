//This is a looped drawing of randomly generated shapes


function setup() {
  print ("Intro to Programming1, Final Assignment, Minsu Kim, 05/06/2023")
  createCanvas(windowWidth, windowHeight);
  background(0);  
}

function draw() {
 
//loop shapes variables  
let numCircles = 50;
let eX1 = 500;
let eY1 = 450;
let eX2 = 150;
let eY2 = 150;
let eX3 = random(0,100);
let eY3 = random(0,100);
let eSt = random(0,255);
let eSw = 0.25;
let eFRandom = random(0,25);
  
//loop starts  
    for (let i = 0; i < numCircles; i++){
      
    rotate(PI/300);
    
    fill(eFRandom);
    noStroke();
    ellipse(eX1,eY1,mouseX/2,mouseY/2);
        
    fill(eFRandom);
    noStroke();
    ellipse(eX2,eY2,mouseX,mouseY);
      
    noFill();
    strokeWeight(eSw); 
    stroke(eSt);
    rect(eX3*i,eY3*i,eX3,eY3);
      
//mouse held pressed function      
    if (mouseIsPressed == true){
      eX1 = eX1 + 10;
      eY1 = eY1 + 10;
      eX2 = eX2 + 5;
      eY2 = eY2 + 5;
      eX3 = eX3 * 3;
      eY3 = eY3 * 3;
      eSw = 5;
      eFRandom = eFRandom + 5;
      PI = PI + 0.1;
      
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

  
  
  
  
  