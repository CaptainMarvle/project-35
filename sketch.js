var Balloon, BalloonAnimation;
var Background, BackgroundImg;
var position,database;

function preeload(){

  BackgroundImg = loadImage("pro-C35 images/__MACOSX/Hot Air Ballon-01.png")
  BalloonAnimation = loadAnimation("pro-C35 images/__MACOSX/Hot Air Ballon-02.png","pro-C35 images/__MACOSX/Hot Air Ballon-03.png","pro-C35 images/__MACOSX/Hot Air Ballon-04.png")

}

function setup() {

  //database = firebase.database();
  database = firebase.database();

  createCanvas(500,500);
  
  balloon = createSprite(100,400,10,10);
  balloon.addAnimation("pro-C35 images/__MACOSX/Hot Air Ballon-02.png","pro-C35 images/__MACOSX/Hot Air Ballon-03.png","pro-C35 images/__MACOSX/Hot Air Ballon-04.png")

  var balloon2 = database.ref('Balloon/position');
  balloon2.on("value", readPosition, showError);

}

function draw() {
  background(BackgroundImg);
  
  
  if(position != undefined){

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

}

  drawSprites();
}


 function changePosition(x,y){
   


   database.ref('balloon/position').set({

   'x': position.x + x,
   'y': position.y + y

  })
 }

function readPosition(data){
position = data.val();

Balloon.x = position.x;
Balloon.y = position.y;

}

function showError(){

console.log("please check your internet conection"); // errore in connection to detabase

}