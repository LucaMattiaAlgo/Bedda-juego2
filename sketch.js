var bedda, beddaImg, carne, carneImg, corazon, corazonImg;
var pilares, pilaresImg, bc, bcImg;
var pisoinv;

function preload(){
  beddaImg = loadImage("Bedda.png");
  carneImg = loadImage("carne.png");
  corazonImg = loadImage("Corazon.png");
  pilaresImg = loadImage("Pilar.png");
  bcImg = loadImage("bc.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bc = createSprite(500,500,1000,20);
  bc.addImage(bcImg);
  bc.scale=0.3;
  bc.velocityX = -4;
  bedda = createSprite(70,530,100,50);
  bedda.addImage(beddaImg);
  bedda.scale = 1.7;
  pisoinv = createSprite(70,580,500,20);
  pisoinv.visible = false;
}

function draw(){
  background("white");
  
  if(bc.x < 0 ){
    bc.x = (width/1.5);
  }

  bedda.collide(pisoinv);  

  if(keyDown("space") && bedda.y > 500){
    bedda.velocityY = -13;
  }

  if(keyDown("space")&& keyDown("c") && bedda.y > 500){
    bedda.velocityY = -17;
  }

console.log(bedda.y);
  bedda.velocityY = bedda.velocityY + 0.5;

  obstacles();
  drawSprites();
}

function obstacles(){
  
  if(frameCount%100 === 0){
    var obstaculo = createSprite(width,500,50,100);
    obstaculo.velocityX = -10;
    obstaculo.addImage(pilaresImg);
    obstaculo.scale = 0.30;
  }



}

