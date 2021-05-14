var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
  music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(1050,600);

    block1 = createSprite(150,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(400,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(650,580,200,30);
    block3.shapeColor = "white";

    block4 = createSprite(900,580,200,30);
    block4.shapeColor = "black";    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "grey"
    ball.velocityX =-5
    ball.velocityY =-5


}

function draw() {
    background("cyan");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
        
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.stop();
        ball.velocityX = 0
        ball.velocityY = 0

    }
   //write code to bounce off ball from the block1 
   if(block3.isTouching(ball)&& ball.bounceOff(block3)){
    ball.shapeColor = "white";
    //music.play();
    
}

if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    ball.shapeColor = "black";
   // music.play();
    
}




    drawSprites();
}
