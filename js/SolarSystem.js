var G = 6.67e-11;
var m1 = 1;
var m2 = 200;
var r = 100; // 1.496 //695510000; //
var scaleY = 500;
var Scale;
var F; //((m1 * m2) / (Math.pow(r, 2)));
var m1x = 0;
var m1y = r;
var x;
var y;
var vx;
var vy;
var vv;
var dx;
var dy;
var m2x = 0;
var m2y = 0;
var gravity;
var speed = 0;
var velox = 0;
var veloy = 0;

var frame = 0;


function setup() {
    createCanvas(800, 500);
}


function draw() {
    background(0);

    dx = m2x - m1x;
    dy = m2y - m1y;
    r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));//scale = (dm.height/2) / scaleY;

    F = ((m1 * m2) / (Math.pow(r, 2)));
    gravity = F / m1;
    if(m1y<0 && gravity>0){gravity=gravity*-1;}
    speed += gravity;
    //speed += 0.98;
    vx = (dx * speed) / r;
    vy = (dy * speed) / r;

    m1x += vx + velox;
    m1y += vy;


    translate(400, 250);
    ellipse(m1x, -m1y, 10);
    console.log(`${frame} y: [${m1y}]  gravity: [${gravity}]  speed: [${speed}]  vy: [${vy}]  r: [${r}]  dy: [${dy}]`);
    //if(frame>8266){noLoop();}
    noLoop();
    frame++;
}

function rdraw(e){
    code = e.which;
    key = e.key;
    if(code == 13){redraw();}
    if(key == "r"){console.log(r);}
    if(key == "g"){console.log(gravity);}
    if(key == "y"){console.log(m1y);}
    if(key == "s"){console.log(speed);}
    if(key == "v"){console.log(vy);}
    if(key == " "){console.log(m1*m2/Math.pow(r,2))}
    //console.log("s");
}
