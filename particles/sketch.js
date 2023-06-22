let particle1;
let particles = [];
let licht;
let xsnelheid;
let ysnelheid;
function setup() {
  createCanvas(900, 900);
 for(let i = 0; i < 100; i++){
  particle1 = new particle();
  particles.push(particle1);
 }
 licht = createSlider(5, 100, 100);
 licht.position(400, 0);
 xsnelheid = createSlider(-7, 7, 0);
 ysnelheid = createSlider(-7, 7, 0);
 xsnelheid.position(250, 0);
 ysnelheid.position(100, 0);
}

function draw() {
  background(0, licht.value());
  for(let i = particles.length-1; i >= 0; i--){
    particles[i].teken();
    particles[i].beweeg(xsnelheid.value(), ysnelheid.value());
    particles[i].controleer();
    // if(particles[i].controleer() == true){
    //   // console.log("test");
    // }
  }
  // console.log(xsnelheid.value(), ysnelheid.value());
}
