class Timer {
  constructor(duracion) {
    this.duracion = duracion; // Duración inicial (en segundos)
    this.tiempoRestante = duracion; // Tiempo que queda
    this.inicio = millis(); // Registrar el tiempo de inicio
    this.activo = true; // Controla si el timer está corriendo
  }

  // Actualizar el timer
  actualizar() {
    if (this.activo) {
      let tiempoTranscurrido = (millis() - this.inicio) / 1000; // Convertir a segundos
      this.tiempoRestante = Math.max(this.duracion - tiempoTranscurrido, 0); // Evitar valores negativos

      if (this.tiempoRestante === 0) {
        this.activo = false; // Detener cuando se acaba el tiempo
      }
    }
  }

  // Dibujar el timer en pantalla
  dibujar() {
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text(`Tiempo: ${Math.ceil(this.tiempoRestante)}`, width - 10, 10);
  }

  // Reiniciar el timer
  reiniciar() {
    this.inicio = millis();
    this.tiempoRestante = this.duracion;
    this.activo = true;
  }
}
