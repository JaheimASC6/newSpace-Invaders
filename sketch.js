let x=300;
let circleY=390;
let circleX=x;
let x2=35;
let y2=31;
let x3=216;
let y3=31;
let circle1;
let circle2;

function init() {
    circle1 = circle(x2,y2,30,'black');
    circle2 = circle(x3,y3,'black');
}

function keyPressed() {

    if (keyCode === 32) {
        circleX=x,
        ellipse(circleX,circleY,10);
    }
}
function refresh(){
    
    circleY=390;
}
function resetEnemies(){

}
function setup(){
    createCanvas(600,600);
}


function draw(){
background(255,255,255);
fill(0,0,0);
rect (15,550,50,50);
rect (65,500,50,100);
rect (115,550,50,50);
rect (165,500,50,100);
rect (215,550,50,50);
rect (265,500,50,100);
rect (315,550,50,50);
rect (330,500,50,100);
rect (345,550,50,50);
init();
ellipse(504,31,30);
fill('red');

if(keyIsDown(LEFT_ARROW)){
    x-=5;
};
if(keyIsDown(RIGHT_ARROW))
{
    x+=5;
}
if (keyIsPressed === true && keyCode == 32 ){
    circleY-=5,
    ellipse(circleX,circleY,10)
}

if (circleY>=30 && circleY<=5 && circleX<=50 &&circleX>=20){
    refresh(),
    x2=10000
};
if (circleX>=215 && circleX<=244 && circleY<=30 &&circleY>=5){
    x3=1000,
    refresh()
}
if(circleY<=1){refresh()};
if(x<=5){
    x=599
}
if(x>=598){
    x=2
}

rect (x,400,10,20);

}



//function mousePressed({clientX, clientY}){
    //console.log(clientX, clientY);
//}

