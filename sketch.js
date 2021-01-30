//declare variable for all sprite
var garden,gardenImg;
var cat,catwalk,catImg,catwalkImg,catstop,catjumpImg;
var rat,ratImg,ratjump,ratjumpImg,ratstop,ratstopImg;
function preload() {
    //all images loaded here 
    gardenImg=loadImage("garden.png");
    ratImg=loadImage("mouse1.png");
    catImg=loadImage("cat1.png");
    ratjumpImg=loadAnimation("mouse2.png","mouse3.png");
    catwalkImg=loadAnimation("cat2.png","cat3.png");
    ratstopImg=loadImage("mouse4.png");
    catstopImg=loadImage("cat4.png");
}                 

function setup(){
    createCanvas(1000,600);
    
    //create garden sprite
    garden=createSprite(500,240);
    garden.addImage(gardenImg);
    garden.scale=1.1;

    //create cat 
    cat=createSprite(780,450);
    cat.addImage(catImg);
    cat.scale=0.15;
    
//create rat
    rat=createSprite(120,450);
    rat.addImage(ratImg);
    rat.scale=0.15;
    
}

function draw() {
background(0);

//give condition idf cat touch the rat 
if(cat.x - rat.x<(cat.width - rat.width)/2){
    cat.addAnimation("catstop",catstopImg);
       cat.changeAnimation("catstop");
       cat.velocityX=0;
       cat.x=500;
rat.addAnimation("ratstop",ratstopImg);
rat.changeAnimation("ratstop");

       }

    
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyWentDown(LEFT_ARROW)){
       cat.addAnimation("catrunning",catwalkImg);
       cat.changeAnimation("catrunning");
       cat.velocityX=-5;
rat.addAnimation("ratafraid",ratjumpImg);
rat.changeAnimation("ratafraid");



}

}
