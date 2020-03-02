var width = innerWidth;
var height = innerHeight;


function setup(){
  width = innerWidth;
  height = innerHeight;
  createCanvas(width, height);
}

var points = [{x:100,y:200},{x:200,y:100},{x:300,y:200},];

function draw(){
  background(100);
  
  for(var i=0; i<points.length-1; i++){
    line(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
  }
  for(var i=0; i<points.length; i++){
    circle(points[i].x,points[i].y,10);
  }
  noFill();
  bezier(points[0].x, points[0].y, points[0].x, points[1].y,
         points[1].x, points[1].y,points[1].x, points[1].y);
 // bezier(points[1].x, points[1].y, points[1].x, points[2].y,
//         points[2].x, points[2].y,points[2].x, points[2].y);
  
  bz();
  
}

function bz(){
  for(var i=1; i<points.length-1; i++){
    var v = createVector(points[i+1].x-points[i-1].x,points[i+1].y-points[i].y-1);
    v.normalize();
    v.mult(2);
    x1 = points[i-1].x;
    y1 = points[i-1].y;
    //x2 = 
    x3 = points[i].x;
    y3 = points[i].y;
    console.log(v.y);
  }

}
