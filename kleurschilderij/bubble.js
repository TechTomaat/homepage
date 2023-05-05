class bubble{
constructor(x){
 this.x = 450;
 this.y = 450;
 this.r = 200;
 this.kleur = int(random(0, 6));
 this.x_snelheid = random(-5, 5);
 this.y_snelheid = random(-5, 5);
 this.x_rand = random(width);
 this.y_rand = random(height);
}

teken(){
    noStroke();
    if(this.kleur == 0){
        fill(219, 51, 9, 50);
    } else if(this.kleur == 1){
        fill(17, 189, 8, 50);
    } else if(this.kleur == 2){
        fill(27, 63, 245, 50);
    } else if(this.kleur == 3){
        fill(141, 235, 222, 50);
    } else if(this.kleur == 4){
        fill(237, 192, 9, 50);
    } else if(this.kleur == 5 ){
        fill(150, 245, 17, 50);
    }
    circle(this.x, this.y, this.r);
}

kieskleur(){
    this.kleur = int(random(0, 3));
}

beweeg(){
    this.x = this.x + this.x_snelheid;
    this.y = this.y + this.y_snelheid;
}

checkrandje(){
    if(this.y < 50 + this.r/2 | this.y + this.r/2 > 975  ){
        this.y_snelheid = this.y_snelheid * -1;
    }
    if(this.x < 50 + this.r/2 | this.x + this.r/2 > 975){
        this.x_snelheid = this.x_snelheid * -1;
    }
}
}