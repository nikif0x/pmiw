class Auto {
  constructor() {
    this.posX = width / 2; // Posición inicial centrada horizontalmente
    this.posY = 300; // Cerca de la parte inferior de la pantalla
    this.colision = false; // Estado inicial sin colisión
    this.vida = 3; // Vidas iniciales
    this.ancho = 250; // Ancho del auto
    this.alto = 30; // Altura del auto
    this.vel= 10;
  }

  // Método para dibujar el auto
  dibujar() {
    image(autoimg, this.posX, this.posY,234,173); // Dibujar la imagen
    console.log(this.posX);
  }

  // Método para mover a la derecha
  moverDerecha() {
    if (this.posX + this.ancho < width) {
      this.posX +=10;
    }
  }

  // Método para mover a la izquierda
  moverIzquierda() {
    if (this.posX > 0) {
      this.posX -= 10;
    }
  }

  // Método para detectar colisión
  detectarColision(objeto) {
    // Verifica si el auto está chocando con otro objeto
    //console.log(objeto.posY);
    if (
      objeto.posY >= 280 && objeto.posX > this.posX && objeto.posX < (this.posX + 234)
    ) {
      this.colision = true;
      this.sonidoColision(); // Ejecutar sonido
      return true;
    }
    return false;
  }

  // Método para emitir sonido de colisión
  sonidoColision() {
    console.log("¡Colisión detectada!"); // Puedes agregar sonido aquí
  }
}
