function setup(){
  createCanvas(800,400);
}
function draw(){
  ball.draw();
}

var ball = new Ball(100,100,50)
createBall(ball);

function createBall(obj){
  Window["lista"] = []
  Window.lista.push(obj);
}
function Ball(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.draw = function(){
    ellipse(this.x,this.y,2*this.r,2*this.r);
  }
  this.coll = function(){
    
  }
  
}
