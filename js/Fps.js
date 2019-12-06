function Fps(){
  this.fps = 0;
  this.time = new Date().getTime();  

  this.get = function(){
    this.step = new Date().getTime()-this.time;
    this.fps =  Math.round(1000/this.step);
    this.time = new Date().getTime();
    return this.fps;
  }
}
