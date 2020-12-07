var dog;
var dogImg;
var dogImg1;
var happyDog;
var database;
var foodS;
var foodStock;
var database;

function preload()
{
dogImg=loadImage("images/dogImg.png");
dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  database=firebase.database();

dog=createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale=0.15;

foodStock=database.ref('Food');
foodStock.on("value",readstock);

}

function draw() {  
background(46,139,87);
  drawSprites();

  fill(255,255,254);
  stroke("black");
  text("Food remaining: "+foodS,170,200);
  textSize(13);

  text("NOTE:Press up arrow key to feed Drago milk",130,10);
  
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1)
}
}
function readstock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
database.ref('/').update({
  Food:x
  })
}