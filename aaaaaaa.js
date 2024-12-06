// Instancias globales
let juego;
let fondoimg, autoimg, rocaimg, corajeimg, viasimg;
let pantalla = 0;

function preload () {
  fondoimg = loadImage('data/fondo.png');
  autoimg = loadImage('data/auto1.png');
  rocaimg = loadImage('data/roca1.png');
  //viasimg = loadImage('data/vias.png');
}

function setup() {
  createCanvas(640, 480); // Resolución definida en la consigna
  juego = new Juego(); // Crear una instancia de la clase Juego
  juego.iniciar(); // Inicializar el juego
  auto = new Auto();
  obstaculo = new Obstaculo(random(width), random(-50));
  tiempo = new Timer();
}

function draw() {
  //console.log("mouseX" + mouseX);
  //console.log("mouseY" + mouseY);
  background(fondoimg);
  if (pantalla == 0) {
    mostrarInstrucciones();

  } else if (pantalla == 1) {
    juego.dibujar(); // Dibujar el juego
    tiempo.dibujar();
    if (frameCount % 10 === 0) {
      new Obstaculo(random(width), random(-50)); // Crear obstáculos fuera de la pantalla
    }

  } else if (pantalla == 2) {
    mostrarCreditos();
  }
  
  if (keyIsPressed){
  if ((key == 'A')||(key=='a')){
    juego.moverIzquierda(); // Mover el auto a la derecha
  } else if ((key == 'D')||(key=='d')) {
    juego.moverDerecha(); // Mover el auto a la izquierda
  } else if (key === 'r' || key === 'R') {
    juego.iniciar(); // Reiniciar el juego
  }}
}

// Manejo de teclas para controlar el auto
//function keyIsPressed() {
  
//}

// Mostrar instrucciones iniciales
function mostrarInstrucciones() {
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  text(
    "Usa las flechas izquierda y derecha para mover el auto.\n" +
      "Evita los obstáculos y acumula puntos.\n" +
      "Presiona cualquier tecla para comenzar.",
    width / 2,
    height / 2
  );

  if (keyIsPressed) {
    pantalla = 1;
  }
}

// Si quieres mostrar créditos
function mostrarCreditos() {
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(200);
  text(
    "Juego desarrollado por [Tu Nombre].\n" +
      "Con música y sonidos cortesía de [Fuente].\n" +
      "Gracias por jugar!",
    width / 2,
    height - 40
  );
}
