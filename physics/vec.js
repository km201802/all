function Vec(x,y){
	this.x = x;
	this.y = y;
	this.len = Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2));
	this.norm = function(){
		this.x = this.x/this.len;
		this.y = this.y/this.len;
	}
	this.length = function(){
		return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2));
	}
	this.dot = function(v){
		return (this.x*v.x)+(this.y*v.y);
	}
}

function Mate(){
	this.norm = function(v){
		return new Vec(v.x/v.len, v.y/v.len);
	}
	this.dot = function(v1, v2){
		return (v1.x*v2.x)+(v1.y*v2.y);
	}
	this.sum = function(v1, v2){
		return new Vec(v1.x+v2.x, v1.y+v2.y);
	}
	this.rest = function(v1, v2){
		return new Vec(v1.x-v2.x, v1.y-v2.y);
	}
	this.multScalar = function(sc, v){
		return new Vec(sc*v.x, sc*v.y);
	}
}
var mate = new Mate();