let square1;
function setup() {
  createCanvas(800, 800);
  square1 = new vierkant();
}

function draw() {
  square1.Beweeg();
  square1.teken();
  // square1.versnellen();
  square1.Checker();
  square1.colour();
  noFill();
  strokeWeight(6);
  rect(0,0,800,800);
}


class vierkant{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.t = 40;
    this.xspeed = 6;
    this.yspeed = 5;
    this.rand = false;
    this.teller = 1;
    this.r = 0;
    this.g = 255;
    this.b = 255;
    this.kleur = true;
    this.checker = 1;
    
  }
  
  teken(){
    fill(this.r, this.g, this.b);
    strokeWeight(1);
    square(this.x, this.y, this.t);
  }
  
  Beweeg(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    
    if(this.x > 760){
      // this.xspeed = this.xspeed + 1;
      this.xspeed = -6;
      this.rand = true;
    }
    
    if(this.x < 0){
      this.xspeed = 6;
    }
    
    if(this.y > 760){
      // this.yspeed = this.yspeed + 1;
      this.yspeed = -5;
      this.rand = true;
    }
    
    if(this.y < 0){
      this.yspeed = 5;
    }
    
    if(this.rand == true){
      console.log("bop")
    }
  }
  
  Checker(){
    this.rand = false; 
  }
  
  colour(){
      if(this.checker == 1){
    this.b = this.b - 1;
    if(this.b == 0){
      this.checker = 2;
    }
  }
  
  if(this.checker == 2){
    this.r = this.r + 1;
    if(this.r == 255){
      this.checker = 3;
    }
  }
  
  if(this.checker == 3){
    this.g = this.g -1;
    if(this.g == 0){
      this.checker = 4;
    }
  }
  
  if(this.checker == 4){
    this.r = this.r -1;
    this.g = this.g + 1;
    this.b = this.b + 1;
    if( this.g == 255){
      this.checker = 1;
    }
  }
  }
}
