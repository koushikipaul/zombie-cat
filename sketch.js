var back_space,back_space_image;
var cat_start,cat_start_image;
var rat_start,rat_start_image,rat_start_dead,rat_start_dead_image;
var rat_start_dead_2,rat_start_dead_2_image;
var gun_shot,gun_shot_image;
var start_button,start_button_image;
var title,title_image;
var intro;
var click;
var cat_stand;
var cat_run1_image;
var GunshotGroup;
var PLAY = 1,END = 0;
var gameState = PLAY;
function preload(){
    back_space_image = loadImage("back.png");
    cat_start_image = loadImage("catstart.png");

    rat_start_image = loadImage("ratstart.png");
    rat_start_dead_image = loadImage("ratstartdead.png");
    rat_start_dead_2_image = loadImage("ratstartdead2.png");
    gun_shot_image = loadImage("gun_shot_image");
    start_button_image = loadImage("start_button.png");
    title_image = loadImage("title.png");
    intro = loadSound("melodyloops-preview-the-bad-clown-2m30s.mp3");
  click = loadSound("Mouse-Click-00-c-FesliyanStudios.com.mp3");

  cat_run1_image = loadAnimation("catstanding.png","catrun1.png","catrun2.png","catrun3.png","catrun4.png");


}
function setup() {
  createCanvas(1000,400);
  back_space =  createSprite(450,200,80,20);
  back_space.addImage(back_space_image);


 back_space.scale = 1.5;
 cat_start = createSprite(200,345,10,10);
 cat_start.addImage(cat_start_image);
 cat_start.scale = 0.3;
 cat_stand = createSprite(200,345,10,10);
cat_stand.addAnimation("cat_run1_image",cat_run1_image );
cat_stand.scale = 0.3;
cat_stand.visible= false;
 rat_start = createSprite(890,355,10,10);
 rat_start.addImage(rat_start_image);
 rat_start.scale = 0.2;
 rat_start_dead = createSprite(645,365,10,10);
 rat_start_dead.addImage(rat_start_dead_image);
 rat_start_dead.scale = 0.2;
 rat_start_dead_2 = createSprite(400,355,10,10);
rat_start_dead_2.addImage( rat_start_dead_2_image);
rat_start_dead_2.scale = 0.3;
gun_shot = createSprite(250,350,10,10);
gun_shot.addImage(gun_shot_image);
gun_shot.scale = 0.1;
start_button = createSprite(550,200,10,10);
start_button.addImage(start_button_image);
start_button.scale= 0.2;
title = createSprite(550,100,10,10);
title.addImage(title_image);
title.scale = 0.6;
intro.play();
GunshotGroup = new Group();
}
function draw(){

background("black");
if(mousePressedOver(start_button)){
 
  intro.stop();
  
  click.play();
start_button.visible = false;
gun_shot.visible = false;
title.visible = false;
rat_start_dead_2.visible = false;
rat_start_dead.visible = false;
rat_start.visible = false;
cat_start.visible = false;
cat_stand.visible = true;



 /// back_space.velocityX = -4;
 // back_space.x = back_space.width /2;
  // if (back_space.x > 0){
  //   back_space.x = back_space.width/2;
  // }
  spawnGunshot();
    
  

}
  
  drawSprites();
  

}
function spawnGunshot(){
  
  if(keyDown("right_arrow")){
    
    var shot=createSprite(250,350,10,10);
    shot.addImage(gun_shot_image);
    shot.scale = 0.1;
    shot.velocityX=3;
     
   shot.lifetime=200;
    GunshotGroup.add(shot);
  
  }
  
}






