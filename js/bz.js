var width = innerWidth;
var height = innerHeight;
console.clear();

function setup(){
  width = innerWidth;
  height = innerHeight;
  createCanvas(width, height);
  //noLoop();
}

var fd = [{x:100,y:200},{x:200,y:100},{x:300,y:200}];
var list = [];

function draw(){
  background(100);
  noFill();
  bz(list);
} 
function mouseClicked(){
  list.push({x:mouseX, y:mouseY});
  console.log(list);
}

function bz(points) {
  //console.log(points.length);
  if (points.length > 2) {
    var lastx = points[0].x;
    var lasty = points[0].y;
    var endx = 0;
    var endy = 0;

    for (var i = 1; i < points.length - 1; i++) {
      var v = createVector((points[i + 1].x - points[i - 1].x) || 0, (points[i + 1].y - points[i - 1].y) || 0);

      var v2 = v.copy();

      v.normalize();
      v.mult(50);
      var x1 = points[i].x;
      var y1 = points[i].y;
      var x2 = (points[i].x + v.x);
      var y2 = (points[i].y + v.y);
      var x3 = points[i].x;
      var y3 = points[i].y;
      var x4 = (points[i].x - v.x);
      var y4 = (points[i].y - v.y);
      //if(po)
      stroke("red");
      line(x1, y1, x2, y2);
      stroke("pink");
      line(x3, y3, x4, y4);
      stroke("blue");
      try {
        bezier(points[i - 1].x, points[i - 1].y, lastx, lasty, x4, y4, points[i].x, points[i].y);
      } catch (e) {

      }
      lastx = x2;
      lasty = y2;
      if (i == points.length - 1) {

      }
      //console.log("x:" + v.x + "  y:" + v.y);
      //console.log("x: " + v2.x + "  y:" + v2.y);
    }
  bezier(points[points.length - 1].x, points[points.length - 1].y, lastx, lasty,
    points[points.length - 2].x, points[points.length - 2].y,
    points[points.length - 2].x, points[points.length - 2].y);
  //bezier(200,200,300,200,300,300,300,300);
  }

}
