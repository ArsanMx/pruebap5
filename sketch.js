// javascript
// hydra 


// puntillismo 

var hc;
var pg; 

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") })

/////////////////////////

osc(100,-0.0018,0.17).diff(osc(20,0.00008).rotate(Math.PI/0.00003))
.modulateScale(noise(1.5,0.18).modulateScale(osc(13).rotate(()=>Math.sin(time/22))),3)
.color(11,0.5,0.4, 0.9, 0.2, 0.011, 5, 22,  0.5, -1).contrast(1.4)
.add(src(o0).modulate(o0,.04),.6, .9)
  //.pixelate(0.4, 0.2, 0.1)
.invert().brightness(0.0003, 2).contrast( 0.5, 2, 0.1, 2).color(1, -6, 0.1)
.modulateScale(osc(2),-0.2, 2, 1, 0.3)
 .posterize(200) .rotate(1, 0.2, 0.01, 0.001)
 .color(22, -2, 0.5, 0.5, 0.0001,  0.1, 0.2, 8).contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1) . brightness(0.0001, -1, 10)
	.out()// hush(); 

/////////////////////////

function setup() {
  createCanvas(400, 400);
  console.log("hola mundo")
  hc = select("#myCanvas")
  hc.hide()
  pg = createGraphics(width, height);

}

function draw() {
  // background(220);
  pg.image(hc, 0, 0);
  noStroke(); 
  
  // pg es una imagen desde Hydra 
  
  // pixeles 
  
  for(let i = 0; i < 400; i++){
  
  let posX = random(width);
  let posY = random(height);
  
  // console.log(pg.get(10, 10)); // RGB+A

  fill(pg.get(posX, posY)); 
  ellipse(posX, posY, 1, 10);
  }
  
  
}