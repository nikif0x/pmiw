class Puntuacion {
  constructor () {
    this.puntuacion = 0; // Contador de puntos
    this.metaPuntos = 10; // Puntos necesarios para ganar
    this.ganar = false;
  }
}

esquivarObstaculo() {
  this.auto.detectarColision === false;
}

contarPuntos() {
    if (esquivarObstaculo) {
    this.puntuacion += 1 && this.puntuacion <= this.metaPuntos;
    }
  }
  
personajeGana() {
    if (this.puntuacion == 10) {
    this.ganar === true;
    }
    console.log("¡Ganaste el juego!");
  }

  // Método para manejar la derrota
  personajePierde() {
    if (this.auto.vida <= 0) {
    console.log("¡Perdiste el juego!");
    }
  }
