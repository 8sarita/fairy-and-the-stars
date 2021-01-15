const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyBody;
var star, starBody;



function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
    
    var starBody_options={
		isStatic:true
	}
	
	starBody = Bodies.circle(650 , 30 , 5,starBody_options );
	
	World.add(world, starBody);
	
	Engine.run(engine);
    fairyVoice.play();
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  

  if (starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
  }

  if (keyDown("down")){
	Matter.Body.setStatic(starBody,false);
  }
 
  console.log(starBody.position.y);

  star.x=starBody.position.x
  star.y=starBody.position.y

  
  keyPressed();
 



  drawSprites();

}

function keyPressed() {
	//write code here
	if (keyDown("right")){
		fairy.position.x=fairy.position.x+10;
	}
	if(keyDown("left")){
		fairy.position.x=fairy.position.x-10;
	}
}
