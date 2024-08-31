function colorRombos(r, g, b, r2, g2, b2) {
  if (frameCount == 10) {
    colorCuadradoNegro = color(r2, g2, b2);
    colorCuadradoBlanco = color(r, g, b);
    colorRomboNegro = color(r2, g2, b2);
    colorRomboBlanco = color(r, g, b);
    frameCount = 2;
  }
}

function keyPressed() {
  if (key == 'r'){
     frameCount = 10; 
   colorRombos( r, g, b, r2, g2, b2);  }
   
  if (key === ' ' && frameCount <= 50) {
    frameCount = 51;
    colorCuadradoBlanco = 255;
    colorRomboBlanco = 255;
    colorCuadradoNegro = 15;
    colorRomboNegro = 15;
  }
}

// esta función devuelve si una variable es par o impar 
function esPar(numero) {
  return (numero % 2 === 0);
}
