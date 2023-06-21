class particle{
    constructor(){
        this.x = random(-100, 1000);
        this.y = random(-100, 1000);
        this.radius = random(15, 40);
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
        this.checker = false;
    }

    teken(){
        fill(this.r, this.b, this.g);
        noStroke();
        circle(this.x, this.y, this.radius);
    }

    beweeg(xspeed, yspeed){
        this.x = this.x + xspeed;
        this.y = this.y + yspeed;

        if(this.x > 900 + this.radius/2 ){
        this.x = this.x - 900;
        }

        if(this.x < 0 + this.radius/2 ){
            this.x = this.x + 900;
        }
            
        if(this.y > 900 + this.radius/2 ){
            this.y = this.y - 900;
        }  
        
        if(this.y < 0 + this.radius/2 ){
            this.y = this.y + 900;
        }
    }

    controleer(){
        if(this.checker = true){
            return true;
        }
        
        else{
            return false;
        }
    }
}
