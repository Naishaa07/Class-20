var fr, mr, o1,o2;

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(300,200,20,70)
  mr.shapeColor="yellow";
  o1=createSprite(100,100,30,30)
  o1.velocityX=2;
  o2=createSprite(300,100,50,80)
  o2.velocityX=-2;
}

function draw() {
  background(0);  
 // mr.x=World.mouseX;
  //mr.y=World.mouseY;
  //fill("yellow") 
  //text(mr.y-fr.y,100,100);
  //text(mr.width/2+fr.width/2,100,200);
  /*if(mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 &&
    mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
    mr.shapeColor="green"
    fr.shapeColor="red"
  }
  else{
    mr.shapeColor="pink"
    fr.shapeColor="blue"
  }*/
  if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2 ){
    fill ("yellow");
    text (o1.velocityY,300,300);
    o1.velocityX=o1.velocityX*(-1);
    o2.velocityX=o2.velocityX*(-1);
  }
  if(o1.y-o2.y<o1.height/2+o2.heigth/2 && o2.y-o1.y<o1.height/2+o2.height/2){
    
    
    o1.velocityY=o1.velocityY*(-1);
    o2.velocityY=o2.velocityY*(-1);
   
  }
  
  drawSprites();
}