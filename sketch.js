var bg, bg_img;
var iss , iss_img;
var spacecraft1 , spacecraft1_img;
var spacecraft2_img , spacecraft3_img , spacecraft4_img;
var hasDocked = false;

function preload() {
bg_img = loadImage("spacebg.jpg");
iss_img = loadImage("iss.png");
spacecraft1_img = loadImage("spacecraft1.png");
spacecraft2_img =loadImage("spacecraft2.png");
spacecraft3_img =loadImage("spacecraft3.png");
spacecraft4_img =loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(600,350);
  iss = createSprite(250, 125, 50, 50);
  iss.addImage(iss_img);
  iss.scale = 0.4;

  spacecraft1 = createSprite(250,250,50,50);
  spacecraft1.addImage(spacecraft1_img);
  spacecraft1.scale = 0.2
}

function draw() {
  background(bg_img);  
  drawSprites();

  if(!hasDocked){
    spacecraft1.x = spacecraft1.x+random(-1,1);

    if(keyDown(UP_ARROW)){
      spacecraft1.y = spacecraft1.y -2;
      }
      
      if(keyDown(RIGHT_ARROW)){
        spacecraft1.x = spacecraft1.x+2;
        spacecraft1.addImage(spacecraft4_img);
        }
      
        if(keyDown(LEFT_ARROW)){
          spacecraft1.addImage(spacecraft3_img);
          spacecraft1.x = spacecraft1.x-2;
          }

          if(keyDown(DOWN_ARROW)){
            spacecraft1.addImage(spacecraft2_img);
          }
  }


  if(spacecraft1.y <= (iss.y+70) && spacecraft1.x <= (iss.x-10))
  { hasDocked = true; 
    textSize(25); 
    fill("white") 
    text("Docking Successful!", 200, 300); 
  }
}