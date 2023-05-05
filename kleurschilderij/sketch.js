let bubble1;
let bubbles = [];
function setup() {
  createCanvas(1800, 1080);
  for(let i = 0; i < 100; i++){
    bubble1 = new bubble();
    bubbles.push(bubble1);
  }
}

function draw() {
  background(255, 10);
  for(let i = 0; i < bubbles.length; i++){
    //bubbles[i].kieskleur();
    bubbles[i].beweeg();
    bubbles[i].teken();
    bubbles[i].checkrandje();
    stroke('black');
   strokeWeight(10);
    noFill();
    strokeJoin(ROUND);
    rect(50, 50, 925, 925);
  }
}
