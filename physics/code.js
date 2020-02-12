window["lista"] = [];


function setup(){
  createCanvas(800,400);
}
function draw(){
  background("white");

  for(var i in lista){
    lista[i].draw();
  }

  lista[0].x = mouseX;
  lista[0].y = mouseY;

  coll();
  //ball.draw();
}

createBall(new Ball(100,100,50));
createBall(new Ball(200,100,50));

// lista
function createBall(obj){
  lista.push(obj);
}
function coll(){
  var distance;
  for(var i=0; i<lista.length-1; i++){
    var x = lista[i+1].x-lista[i].x;
    var y = lista[i+1].y-lista[i].y;
    var rr = lista[i+1].r+lista[i].r;
    distance = sqrt(pow(x, 2)+pow(y, 2))
    if(distance<rr){
      //console.log(`${y}   ${x}`)
      for(var i=0; i<lista.length; i++){
        lista[i].coll(-y, x);
      }
    }
  }
  
}

function Ball(x, y, r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.vx = 1;
  this.vy = 0;
  this.draw = function(){
    ellipse(this.x,this.y,2*this.r,2*this.r);
  }
  this.coll = function(x, y){
    var n = new Vec(x,y);
    var v = new Vec(this.vx, this.vy);
    var n = mate.norm(n);
    var nv = mate.dot(n,v)/mate.dot(v,v);
    var nn = mate.multScalar(nv, n);
    var n2 = mate.multScalar(-2, nn)
    var v2 = mate.sum(n2, v);
    console.log(v2);
  }
  
}