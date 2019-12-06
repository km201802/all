class Fps{
  constructor(){
    this.frames = 0; 
    this.frame = 0;
    var time = new Date().getTime();
  }
  get(){
    this.step =new Date().getTime()-time;
    this.frames =  Math.round(1000/step);
    this.time = new Date().getTime();
    return this.frames;
    this.frame++;
  }
  
}
